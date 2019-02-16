import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateDeckName } from '../../../ducks/reducer';

class SavedDecksCard extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }


    render() {
        const { deck, id } = this.props;
        console.log('the deck props', deck);
        console.log('SavedDecksCard props', this.props);
        // console.groupEnd('end of savedDeckCards console.logs')
        return (
            <div className={this.props.user ? 'user-deck' : 'hide'}>
                <button onClick={()=> {this.deleteDeck(deck.id)}} >Del</button>
                <div className='deck-images'>
                    <img src={deck.deckimage} onClick={()=> {this.props.getUserCards(deck.id)}}  />
                </div>
                {!this.props.toggle ?
                <div className="name">
                    <p>{deck.name}</p>
                    <button onClick={this.props.toggler}>Edit</button>
                </div>
                : <div className='update'>
                    <input onChange={e => this.props.updateDeckName(e.target.value)} placeholder='New Deck Name' />
                    <div className='update-buttons'>
                        <button className='update-button' onClick={()=>this.props.updateNameOfDeck(deck.id)}>Submit</button>
                        <button onClick={this.props.toggler}>Cancel</button>
                    </div>
                </div>
            }
            </div>
        );
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
    updateDeckName: updateDeckName
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedDecksCard);