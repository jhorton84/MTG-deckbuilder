import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../ducks/reducer';
import { withRouter } from 'react-router';

class Header extends Component {
    

    render() {
        console.log('username', this.props.user)
        const { user } = this.props;
        console.log('props-header', this.props)
        console.log('state ====>', this.state)
        return (
            <div className='header-component'>
                <header>
                    <div className='header-fade'>
                        <div className='logo'><img src='https://i.pinimg.com/originals/73/b9/12/73b91242da1257f1680e31a60ebf2da2.png' /></div>
                        <h1 className='title'><h2 className='tiny-title'>The</h2>Grimoire: <p className='small-title'>MTG Deckbuilder</p></h1>
                        {/* <div className='login'>
                            <div className='logged-user'>
                                <img src={user ? user.picture : ''} />
                                {user ? user.name : 'Please Log in!'}
                            </div>
                            
                            <div className='login-buttons'>
                                <button className='login-button' onClick={this.props.login}>Log in</button>
                                <button className='login-button' onClick={this.props.logout}>Log out</button>
                            </div>
                                
                        </div> */}
                        <div className='nav-links'>
                            <NavLink activeClassName='active' exact to='/' >
                                Home
                            </NavLink>

                            <NavLink activeClassName='active' exact to='/deckbuilder' >
                                Deck Builder
                            </NavLink>

                            <NavLink activeClassName='active' exact to='/decks' >
                                Saved Decks
                            </NavLink>
                        </div>
                    </div>
                </header>
            </div>
        )
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
// export default Header;