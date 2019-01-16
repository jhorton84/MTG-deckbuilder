import React from 'react';
import { connect } from 'react-redux';
import { updateSearchName } from '../../../../ducks/reducer';
import { updateSearchText } from '../../../../ducks/reducer';
import ColorSelector from './ColorSelector/ColorSelector';
import CardTypeSelector from './CardTypeSelector/CardTypeSelector';
import SetSelector from './SetSelector/SetSelector';


function SearchTools(props) {

    
    return (
        <div className='searchTools-component'>
            {/* SearchTools */}
            <input className='tool' onChange={e=>props.updateSearchName(e.target.value)} placeholder='Search for Card Name' />
            <input className='tool' onChange={e=>props.updateSearchText(e.target.value)} placeholder='Search for Card Text' />
            <ColorSelector
                colorWhite={props.colorWhite}
                colorBlue={props.colorBlue}
                colorBlack={props.colorBlack}
                colorRed={props.colorRed}
                colorGreen={props.colorGreen}
                colorAll={props.colorAll}
                handleCheckBox={props.handleCheckBox}

            />
                
            <CardTypeSelector/>
            
            <SetSelector/>
            <button onClick={()=>props.searchCards()}>Search</button>
        </div>
    )
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