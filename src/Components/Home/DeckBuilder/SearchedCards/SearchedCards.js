import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { updateSelectedCard, updateSelectedName } from '../../../../ducks/reducer';

class SearchedCards extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const { cards } = this.props;
        console.log('cards', cards);

            let magicCards = cards.map(card => {
        
            return card.card_faces ? 
            card.card_faces.find(e => e.hasOwnProperty('image_uris')) ? 
                <>
                    <img className='magic-card' src={card.card_faces[0].image_uris.png} alt='' key={card.id} onClick={() => {this.props.setCard(card)}} />
                    <img className='magic-card' src={card.card_faces[1].image_uris.png} alt='' key={card.id} onClick={() => {this.props.setCard(card)}} />
                </>
                : <img className='magic-card' src = {card.image_uris.png} alt='' key={card.id} onClick={() => {this.props.setCard(card)}} />
            : 
            <img className='magic-card' src={card.image_uris.png} alt='' key={card.id} onClick={() => {this.props.setCard(card)}} />
            
        });

        return (
            <div className='SearchedCards-component'>
                SearchedCards

                <div className='magic-cards'>
                    {magicCards}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchName: state.searchName,
        cardType: state.cardType,
        searchText: state.searchText,
        cardColor: state.cardColor,
        selectedCard: state.selectedCard,
        selectedName: state.selectedName,
        cards: state.cards
    }
}

const mapDispatchToProps = {
    updateSelectedCard: updateSelectedCard,
    updateSelectedName: updateSelectedName
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchedCards);