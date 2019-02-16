import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { updateDecks, updateUserDeckCards, updateDeckName } from '../../../ducks/reducer';
import UserDeckCards from './UserDeckCards/UserDeckCards';
import SavedDecksCard from './SavedDecksCard';


class SavedDecks extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
            editThis: null
        }
    }
    
    componentDidMount() {
        
        this.getUserDecks();
        this.getUserCards();
    }

    getUserDecks = () => {
        console.log('decks user id', this.props.user && this.props.user.auth0_id);
        axios.get(`/api/decks/${this.props.user && this.props.user.auth0_id}`).then(response => {
            this.props.updateDecks(response.data);
        })
    }

    getUserCards = (deck_id) => {
        console.log('decks id',this.props.decks.id);
        console.log('deck_id =======>', deck_id);
        axios.get(`/api/deckCards/${deck_id && deck_id}`).then(response => {
            console.log('userdeckCards response', response.data)
            this.props.updateUserDeckCards(response.data)
        })
    }

    deleteDeck = deck_id => {
        if(window.confirm('Are you sure you want to delete this deck?')){
        axios.delete(`/api/decks/${deck_id}`).then(response => {
            console.log('delete deck response', response.data)
            this.props.updateDecks(response.data);
            this.getUserDecks();
        })}
    }

    updateNameOfDeck = (deck_id, Name) => {
        console.log('deck_id in update', deck_id);
        this.toggler();
        const updatedDeck = {

        }
        axios.put(`/api/decks/${deck_id}`, {Name: this.props.deckName}).then(response => {
            this.props.updateDeckName(response.data);
            this.getUserDecks();

        })
    }

    toggler = () => {
        console.log('toggled',new Date, this.state.toggle);
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            };
        })
    }

    render(){
        console.log('userDecks images', this.props.decks)
        const userDecks = this.props.decks.map(deck => {
            console.log('----deck', deck)
            // console.groupEnd();
        return (
            <div>
               <SavedDecksCard
                    deck={deck}
                    deckimage={deck.deckimage}
                    id={deck.id}
                    name={deck.name}
                    user_id={deck.user_id}
                    updateNameOfDeck={this.updateNameOfDeck}
                    getUserCards={this.getUserCards}
                    toggle={this.state.toggle}
                    toggler={this.toggler}
                    editThis={this.state.editThis}
                    handleEdit={this.handleEdit}
                    />
            </div>
        )
        })
        return (
            <div className='SavedDecks-component'>
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        decks: state.decks,
        userDeckCards: state.userDeckCards,
        user: state.user,
        deckName: state.deckName
    }
}

const mapDispatchToProps = {
    updateDecks: updateDecks,
    updateUserDeckCards: updateUserDeckCards,
    updateDeckName: updateDeckName
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedDecks)