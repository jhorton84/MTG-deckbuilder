import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckListCard from './DeckListCard/DeckListCard';
import axios from 'axios';
import { updateDeckList } from '../../../../ducks/reducer';
import {Link} from 'react-router-dom';


class UserDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        axios.get('/api/gathering').then(response => {
            this.props.updateDeckList(response.data)
        })
    }

    render() {
        console.log('userDeck props', this.props);
        const myDeck = this.props.deckList.map(card => {
            console.log('userDeck card', card);

            return (
                <div key={card.id} className='card'>
                    <DeckListCard 
                        id={card.id}
                        imageCard={card.imageUrl}
                        deleteDeckCard={this.props.deleteDeckCard}
                        updateDeckCard={this.props.updateDeckCard}
                    />
                </div>
            )
        })

        return (
            <div className='UserDeck-component'>
                {/* UserDeck */}
                {/* <div className='selectedCard-container'>
                    <h2>{this.props.selectedName}</h2>
                    <img src={this.props.selectedCard} alt=''/>
                    <button onClick={()=>{this.props.postUserCardToTheServer()}}>Add to Deck</button>
                </div> */}
                <div className='counter'>
                    Deck: {myDeck.length}/60
                </div>
                <div className='save-deck-button'>
                     <Link to='/createDeck/image'><button >Save Deck</button></Link>
                </div>
                <div className={myDeck.length? 'DeckList' : 'hide'}>
                    
                    {myDeck}
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
        deckList: state.deckList
    }
}

const mapDispatchToProps = {
    updateDeckList: updateDeckList
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDeck);