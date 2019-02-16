import React, { Component } from 'react';
import './App.css';
import './Components/Header/Header.css';
import './Components/Routes/DeckBuilder/DeckBuilder.css';
import './Components/Routes/DeckBuilder/SearchedCards/SearchedCards.css';
import './Components/Routes/DeckBuilder/SearchTools/SearchTools.css';
import './Components/Routes/Tips/Tips.css';
import './Components/Routes/Home/Home.css';
import './Components/Routes/DeckBuilder/UserDeck/UserDeck.css';
import './Components/Routes/SavedDecks/UserDeckCards/UserDeckCards.css';
import './Components/Routes/SavedDecks/SavedDecks.css';
import './Components/CreateDeck/CreateDeck.css';
import './reset.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Routes/Home/Home';
import Tips from './Components/Routes/Tips/Tips';
import Header from './Components/Header/Header';
import DeckBuilder from './Components/Routes/DeckBuilder/DeckBuilder';
import SavedDecks from './Components/Routes/SavedDecks/SavedDecks';
import CreateDeckImage from './Components/CreateDeck/CreateDeckImage';
import CreateDeckName from './Components/CreateDeck/CreateDeckName';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setUser } from './ducks/reducer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    }
  }

  componentDidMount() {
    axios.get('/auth/user-data').then(response => {
      // console.log('response.data user', response.data)
      this.props.setUser( response.data.user )
      });
    
  }

  login() {
    const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback')
    window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
  }

  logout=()=> {
    axios.post('/auth/logout').then(() => {
      this.setState({
        user: null
      });
      this.props.setUser(null);
    });
  }

  render() {
    const { user } = this.props;
    return (
      <div className="App">
          <div className='login'>
            <div className='logged-user'>
            
            
                <img src={user ? user.picture : ''} />
                <button className={this.props.user ? 'hide' : 'logged-user-button'} onClick={this.login}>Log in</button>
                <button className={this.props.user ? 'logged-user-button' : 'hide'} onClick={this.logout}>Log out</button>
                {/* {user ? user.name : 'Please Log in!'} */}
            </div>
                        
          </div>
          
          <Header 
            login={this.login}
            logout={this.logout}
          />
          
        <div className='main-components'>
          <div className='routes-components'>
            <Switch>
              <Route exact path='/' component = {Home} />
              <Route exact path='/tips' component = {Tips} />
              
              <Route exact path='/decks' component={SavedDecks} />
              
              <Route exact path='/deckbuilder' component={DeckBuilder} />
              <Route exact path='/createDeck/image' component={CreateDeckImage}/>
              <Route exact path='/createDeck/name' component={CreateDeckName}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  setUser: setUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
// export default App;
