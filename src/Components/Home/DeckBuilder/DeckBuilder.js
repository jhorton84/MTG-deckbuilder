import React, { Component } from 'react'
import SearchTools from './SearchTools/SearchTools';
import SearchedCards from './SearchedCards/SearchedCards';
import UserDeck from './UserDeck/UserDeck';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSelectedCard, updateSelectedName, updateDeckList, updateCards } from '../../../ducks/reducer';


class DeckBuilder extends Component {
    constructor() {
        super();
        this.state = {
            // cards: [],
            colorWhite: '',
            colorBlue: '',
            colorBlack: '',
            colorRed: '',
            colorGreen: '',
            colorLess: ''
        }
    }

    componentDidMount() {
        // this.displayCards();
        this.getInitialCards();
        // this.getDeckFromServer();
    }

    getInitialCards = () => {
        axios.get('https://api.scryfall.com/cards').then(response => {
            console.log('initialcards', response)
            this.props.updateCards(response.data.data);
        })
    }

    searchCards = () => {
        const searchName = this.props.searchName ? "name&q="+this.props.searchName : '';
        const colors = this.state.colorWhite || this.state.colorBlue || this.state.colorBlack || this.state.colorRed || this.state.colorGreen || this.state.colorLess ? '+color%3D'+this.state.colorWhite+this.state.colorBlue+this.state.colorBlack+this.state.colorRed+this.state.colorGreen+this.state.colorLess : '';
        const searchText = this.props.searchText ? 'oracle%3A'+this.props.searchText : '';
        const cardType = this.props.cardType ? 'type%3A'+this.props.cardType : '';
        axios.get(`https://api.scryfall.com/cards/search?as=grid&order=${searchName}+${searchText}+${cardType}${colors}`).then(response => {
            this.props.updateCards(response.data.data)
        })
    }

    setCard = card => {
        console.log('selectedCard', card.card_faces ? card.card_faces[0].image_uris.png :card.image_uris.png, 'card name', card.name)
        this.props.updateSelectedCard(card.card_faces ? card.card_faces[0].image_uris.png ? card.card_faces[0].image_uris.png : card.image_uris.png : card.image_uris.png)
        // this.props.updateSelectedCardBack()  ----- perhaps create a function where you pass in the other side of the card with a card_faces??
        this.props.updateSelectedName(card.name)
    }

     //This sends the card that is selected to the deck (favorites)
    postUserCardToTheServer = () => {
        const savedCard = {
            imageUrl: this.props.selectedCard,
            name: this.props.selectedName
        }
        axios.post('/api/gathering', savedCard).then(response => {
            console.log('postUserCardToTheServer response', response)
            this.props.updateDeckList(response.data)
        })
        this.cancelSelectCard();
    }

    //This function is used to update a card in the deck by swapping it with another card.
    updateDeckCard = (id) => {
        const updatedCard = {
        imageUrl: this.props.selectedCard,
        name: this.props.selectedName
        }
        axios.put(`/api/gathering/${id}`, updatedCard).then(response => {
        this.props.updateDeckList(response.data)
        })
    }

    //this function should delete a card from the deck
    deleteDeckCard = id => {
        console.log('delete id', id);
        axios.delete(`/api/gathering/${id}`).then(response => {
            this.props.updateDeckList(response.data)
        });
    }

    handleCheckBox = (name, value) => {
        if(this.state[name]) {
            this.setState({
                [name]: ''
            })
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    saveDeckCards = () => {
        const { cards } = this.state;
        axios.post('/api/decks', cards).then(response => {
            console.log(response)
        })
    }

    cancelSelectCard = () => {
        console.log('selectedCard', this.props.selectedCard);
        this.props.updateSelectedCard(null);
        this.props.updateSelectedName(null);
    }
    

    render() {

        return (
            <div className='deckbuilder-component'>
                <div className='searchTools' >
                    <SearchTools 
                        searchName={this.props.searchName}
                        searchCards={this.searchCards}
                        searchCardsTwo={this.searchCardsTwo}
                        colorWhite={this.state.colorWhite}
                        colorBlue={this.state.colorBlue}
                        colorBlack={this.state.colorBlack}
                        colorRed={this.state.colorRed}
                        colorGreen={this.state.colorGreen}
                        colorLess={this.state.colorLess}
                        handleCheckBox={this.handleCheckBox}
                    />
                </div>

                <div className='save-deck-button'>
                    Click to save Deck! --> <Link to='/createDeck/image'><button >Save Deck</button></Link>
                </div>

                <div className='searchedCards-deckbuilder'>
                    <SearchedCards 
                        setCard={this.setCard}
                    />
                </div>

                <div className='userDeck-deckbuilder'>
                    <UserDeck 
                        postUserCardToTheServer={this.postUserCardToTheServer}
                        updateDeckCard={this.updateDeckCard}
                        deleteDeckCard={this.deleteDeckCard}
                    />
                </div>

                {/* <div className='selectedCard-container'>
                    <h1>{this.props.selectedName}</h1>
                    <img src={this.props.selectedCard}/>
                    <button onClick={()=>{this.postUserCardToTheServer()}}>Add to Deck</button>
                </div> */}

                {/* <div className='magic-cards'>
                    {magicCards}
                </div> */}
                
                <div className={this.props.selectedCard ?'selectedCard-background' : 'hide'}>
                    <div className='selectedCard-container'>
                        <h2>{this.props.selectedName}</h2>
                        <div className='selectedCard-imageContainer'>
                            <img src={this.props.selectedCard} alt=''/>
                            <button className='cancel' onClick={()=>this.cancelSelectCard()}>X</button>
                        </div>
                        <button className='selectedCard-add' onClick={()=>{this.postUserCardToTheServer()}}>Add to Deck</button>
                    </div>
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
    updateSelectedName: updateSelectedName,
    updateDeckList: updateDeckList,
    updateCards: updateCards
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilder);
