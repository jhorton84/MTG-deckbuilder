import React from 'react';
import { connect } from 'react-redux';
import { updateSelectedCard } from '../../../../../ducks/reducer';

function DeckListCard(props) {
    console.log('DeckListCard props', props);
    return (
        <div className='decklist-card'>
                <img alt='' src={props.imageCard} onClick={()=>{props.udpateSelectedCard(props.imageCard)}} />
                {/* <button onClick={()=> props.updateDeckCard(props.id)} >Update</button> */}
                <button className='delete' onClick={()=> props.deleteDeckCard(props.id)} >X</button>
                {/* <img alt='' src={card.imageUrl} />
                <button onClick={()=> props.updateDeckCardProps(card.id)} >Update</button>
                <button className='delete' onClick={()=> props.deleteDeckCardProps(card.id)} >X</button> */}
        </div>
    )
}

const mapStateToProps = state => {

}

const mapDispatchToProps = {
    udpateSelectedCard: updateSelectedCard
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListCard);