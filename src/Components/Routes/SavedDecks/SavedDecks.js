import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { updateDecks, updateUserDeckCards } from '../../../ducks/reducer';
import UserDeckCards from './UserDeckCards/UserDeckCards';


class SavedDecks extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.getUserDecks();
        this.getUserDeckCards();
    }

    getUserDecks = () => {
        console.log('decks user id', this.props.user && this.props.user.auth0_id);
        axios.get(`/api/decks/${this.props.user && this.props.user.auth0_id}`).then(response => {
            this.props.updateDecks(response.data);
        })
    }

    getUserDeckCards = (deck_id) => {
        console.log('decks id',this.props.decks.id);
        console.log('deck_id =======>', deck_id);
        axios.get(`/api/deckCards/${deck_id && deck_id}`).then(response => {
            console.log('userdeckCards response', response.data)
            this.props.updateUserDeckCards(response.data)
        })
    }

    deleteDeck = deck_id => {
        axios.delete(`/api/decks/${deck_id}`).then(response => {
            console.log('delete deck response', response.data)
            this.props.updateDecks(response.data);
            this.getUserDecks();
        })
    }

    render(){
        console.log('userDecks images', this.props.decks)
        const userDecks = this.props.decks.map(deck => {
        return (
            <div className={this.props.user ? 'user-deck' : 'hide'}>
                <button onClick={()=> {this.deleteDeck(deck.id)}} >Del</button>
                <div className='deck-images'>
                    <img src={deck.deckimage} onClick={()=> {this.getUserDeckCards(deck.id)}}  />
                </div>
                <p>{deck.name}</p>
            </div>
        )
        })
        return (
            <div className='saved-decks'>
                <div className='decks'>
                {/* <div className='saved-title'>
                    <h1>Saved Decks</h1>
                </div> */}
                    {userDecks}
                </div>
                <div className='userDeckCards'>
                    <UserDeckCards />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        decks: state.decks,
        userDeckCards: state.userDeckCards,
        user: state.user
    }
}

const mapDispatchToProps = {
    updateDecks: updateDecks,
    updateUserDeckCards: updateUserDeckCards
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedDecks)