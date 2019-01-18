import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchName } from '../../../../ducks/reducer';
import { updateSearchText } from '../../../../ducks/reducer';
import ColorSelector from './ColorSelector/ColorSelector';
import CardTypeSelector from './CardTypeSelector/CardTypeSelector';
import SetSelector from './SetSelector/SetSelector';


class SearchTools extends Component {
    constructor() {
        super();
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
        return (
            <div className='searchTools-component'>
                {/* SearchTools */}
                <button className='toggle-button' onClick={this.toggler}>Search</button>
                <div className={this.state.toggle ? 'searchTools-show' : 'hide'}>
                    <div className='theTools'>
                        <input className='tool' onChange={e=>this.props.updateSearchName(e.target.value)} placeholder='Search for Card Name' />
                        <input className='tool' onChange={e=>this.props.updateSearchText(e.target.value)} placeholder='Search for Card Text' />
                        <ColorSelector
                            colorWhite={this.props.colorWhite}
                            colorBlue={this.props.colorBlue}
                            colorBlack={this.props.colorBlack}
                            colorRed={this.props.colorRed}
                            colorGreen={this.props.colorGreen}
                            colorAll={this.props.colorAll}
                            handleCheckBox={this.props.handleCheckBox}

                        />
                            
                        <CardTypeSelector/>
                        
                        <SetSelector/>
                        <button onClick={()=>this.props.searchCards()}>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchName: state.searchName
    }
}

const mapDispatchToProps = {
    updateSearchName: updateSearchName,
    updateSearchText: updateSearchText
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTools);