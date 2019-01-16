import React, { Component } from 'react';
import './App.css';
import './reset.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import DeckBuilder from './Components/Home/DeckBuilder/DeckBuilder';
import SavedDecks from './Components/Home/SavedDecks/SavedDecks';
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
      console.log('response.data user', response.data)
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

    return (
      <div className="App">
          <Header 
            login={this.login}
            logout={this.logout}
          />
        <div className='main-components'>
          <div className='routes-components'>
            <Switch>
              <Route exact path='/' component = {Home} />
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
