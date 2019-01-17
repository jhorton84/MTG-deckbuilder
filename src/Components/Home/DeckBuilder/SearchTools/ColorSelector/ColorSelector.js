import React from 'react';
import { updateCardColor } from '../../../../../ducks/reducer';
import { connect } from 'react-redux';

function ColorSelector(props) {
    return (
        <div className='colorSelector-component'>
            {/* <select onChange={props.updateColor} className='selectors'>
                <option value=''>All Colors</option>
                <option value='g'>Green</option>
                <option value='u'>Blue</option>
                <option value='w'>White</option>
                <option value='r'>Red</option>
                <option value='b'>Black</option>
            </select> */}
            <p>Color:</p>
            <div className='colorSelector'>
                <input type='checkbox' name='colorWhite' checked={props.colorWhite} id='color' defaultValue={true} onClick={e => props.handleCheckBox(e.target.name, 'W')}/>
                <label for='color'>White</label>
            </div>
            
            <div className='colorSelector'>
                <input type='checkbox' name='colorBlue' checked={props.colorBlue} id='color' defaultValue={true} onClick={e => props.handleCheckBox(e.target.name, 'U')}/>
                <label for='color'>Blue</label>
            </div>
            
            <div className='colorSelector'>
                <input type='checkbox' name='colorBlack' checked={props.colorBlack} id='color' defaultValue={true} onClick={e => props.handleCheckBox(e.target.name, 'B')}/>
                <label for='color'>Black</label>
            </div>
            
            <div className='colorSelector'>
                <input type='checkbox' name='colorRed' checked={props.colorRed} id='color' defaultValue={true} onClick={e => props.handleCheckBox(e.target.name, 'R')}/>
                <label for='color'>Red</label>
            </div>
            
            <div className='colorSelector'>
                <input type='checkbox' name='colorGreen' checked={props.colorGreen} id='color' defaultValue={true} onClick={e => props.handleCheckBox(e.target.name, 'G')}/>
                <label for='color'>Green</label>
            </div>
            
            <div className='colorSelector'>
                <input type='checkbox' name='colorLess' checked={props.colorLess} id='color' defaultValue={true} onClick={e => props.handleCheckBox(e.target.name, 'C')}/>
                <label for='color'>Colorless</label>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cardColor: state.cardColor
    }
}

const mapDispatchToProps = {
    updateCardColor: updateCardColor
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector);