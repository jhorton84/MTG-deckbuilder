import React from 'react';
import { connect } from 'react-redux';
import { updateSelectedCard } from '../../../../../ducks/reducer';
import flip from '../../../../../images/flip.png';

function DeckListCard(props) {
    console.log('DeckListCard props', props);
    console.log('XXXXXXX--props.card',props.card);
    return (
        <div className='DeckListCard-component'>
            {/* <div className='decklist-card'>
                    <img alt='' src={props.cardObject} onClick={()=>{props.udpateSelectedCard(props.imageCard)}} />
                    <button className='delete' onClick={()=> props.deleteDeckCard(props.id)} >X</button>
            </div> */}
            <div className='deck-cards'>
            {props.card.card && 
                <div className='decklist-card'>
                    <div className='deckListCard-container'>
                        <div className='deckListCard-imageContainer'>
                        {props.card.card.card_faces ? 
                            props.card.card.card_faces[0].image_uris.png ?  
                            <div className='flip-card-deckList'> 
                                <div className='flip-card-inner-deckList'>
                                    <div className='magic-card-front-deckList'>
                                        <img className='magic-card-deckList' src={props.card.card.card_faces[0].image_uris.png} />
                                        <button className='flip-button-decklist' ><img src={flip} /></button>  
                                        {/* <button className='delete' onClick={()=> props.deleteDeckCard(props.id)} >X</button> */}
                                    </div>
                                    <div className='magic-card-back-deckList'>
                                        <img className='magic-card-deckList' src={props.card.card.card_faces[1].image_uris.png}/>
                                        {/* <button className='delete' onClick={()=> props.deleteDeckCard(props.id)} >X</button>  */}
                                        {/* <button className='flip-button' >Flip</button> */}
                                    </div>
                                </div>
                            </div> 
                            : <div className='deckList-image'>
                                <img src={props.card.card.image_uris.png} /> 
                                <button className='delete' onClick={()=> props.deleteDeckCard(props.id)} >X</button>
                                
                             </div>
                        : 
                        <img src={props.card.card.image_uris.png} />}
                            <button className='delete' onClick={()=> props.deleteDeckCard(props.id)} >X</button>
                            {/* <img src={this.props.selectedCard.image_uris.png} /> */}
                            {/* <img src={this.props.selectedCard} alt=''/> */}
                            
                        </div>
                        
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedCard: state.selectedCard
    }
}

const mapDispatchToProps = {
    updateSelectedCard: updateSelectedCard
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListCard);