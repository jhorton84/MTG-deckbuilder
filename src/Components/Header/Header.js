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
            <header className='header-component'>
                <div className='wrapper'>
                    {/* -------Menu------- */}
                    <nav id='menu'>
                        <NavLink className='home' to='/en' ></NavLink>
                        <div className='menu-wrapper'>
                            <ul className='main-menu'>
                                <li className='first expanded top_level' >
                                    <NavLink to='/' className='nolink'>
                                        <span>Products</span>
                                        {/* ::after */}
                                    </NavLink>
                                    <div className='mega-menu'></div>
                                        <ul className='mega_menu_content'>
                                            <li className='first expanded column'>
                                                <NavLink to='/' className='nolink'>
                                                    {/* ::before */}
                                                    <span>Featured</span>
                                                </NavLink>
                                                <ul>
                                                    <li>
                                                        <NavLink to='/en/mtgarena' >
                                                            <span>
                                                                <img src='https://magic.wizards.com/sites/mtg/files/menu/Arena_featured_product.jpg' />
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className='expanded column'></li>
                                            <li className='expanded column'></li>
                                            <li className='last expanded column'></li>
                                        </ul>
                                </li>
                                <li className='leaf top_level'>

                                </li>
                                <li className='expanded top_level'></li>
                                    <NavLink to='/' className='nolink'>
                                        <span>Play</span>
                                    </NavLink>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
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