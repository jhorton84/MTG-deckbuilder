import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../ducks/reducer';
import { withRouter } from 'react-router';

class Header extends Component {
    constructor() {
        super() 
        this.state = {
            toggle: false
        }
    }

    toggler = () => {
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            };
        })
    }

    render() {
        
        // console.log('username', this.props.user)
        const { user } = this.props;
        // console.log('props-header', this.props)
        // console.log('state ====>', this.state)
        return (
            <div className='header-component'>
                <header>
                    <div className='header-fade'>
                        <div className='logo'><img src='https://i.pinimg.com/originals/73/b9/12/73b91242da1257f1680e31a60ebf2da2.png' /></div>
                        <h1 className='title'><h2 className='tiny-title'>The</h2>Grimoire: <p className='small-title'>MTG Deckbuilder</p></h1>
                        <button className='toggle-button' onClick={this.toggler}>Menu</button>
                        {/* <div className={this.state.toggle ? 'nav-links' : 'hidden'}> */}
                        <div className={'desktop-nav ' + (this.state.toggle ? 'nav-links' : 'hidden')}>
                            <NavLink activeClassName='active' exact to='/' >
                                Home
                            </NavLink>

                            <NavLink activeClassName='active' exact to='/deckbuilder' >
                                Deck Builder
                            </NavLink>

                            <NavLink activeClassName='active' exact to='/decks' >
                                Saved Decks
                            </NavLink>
                            
                            <NavLink activeClassName='active' exact to='/Tips' >
                                Tips
                            </NavLink>
                        </div>
                    </div>
                </header>
                {/* <div className={this.state.toggle ? 'nav-links' : 'hidden'}>
                            <NavLink activeClassName='active' exact to='/' >
                                Home
                            </NavLink>

                            <NavLink activeClassName='active' exact to='/deckbuilder' >
                                Deck Builder
                            </NavLink>

                            <NavLink activeClassName='active' exact to='/decks' >
                                Saved Decks
                            </NavLink>
                </div> */}
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