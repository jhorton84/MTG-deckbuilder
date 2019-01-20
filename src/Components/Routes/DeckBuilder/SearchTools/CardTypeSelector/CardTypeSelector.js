import React from 'react';
import { connect } from 'react-redux';
import { updateCardType } from '../../../../../ducks/reducer';

function CardTypeSelector(props) {
    return (
        <div className='cardType-component'>
            <select onChange={e=>props.updateCardType(e.target.value)} className='selectors'>
                <option value=''>All Types</option>
                <option value='land'>Land</option>
                <option value='planeswalker'>planeswalker</option>
                <option value='creature'>Creature</option>
                <option value='sorcery'>Sorcery</option>
                <option value='instant'>Instant</option>
                <option value='artifact'>Artifact</option>
                <option value='enchantment'>Enchantment</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cardType: state.cardType
    }
}

const mapDispatchToProps = {
    updateCardType: updateCardType
  }

export default connect(mapStateToProps, mapDispatchToProps)(CardTypeSelector);