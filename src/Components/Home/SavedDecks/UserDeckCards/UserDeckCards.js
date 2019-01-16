import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserDeckCards extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        console.log('-----------++++ userDeckCards',this.props.userDeckCards)
        const userDeckCardsList = this.props.userDeckCards.map(card => {
            console.log('cards from the deck', card)
            return (
                <div className='deck-card-images'>
                    <img src={card.imageurl} />
                </div>
            )
        })

        return (
            <div className='UserDeckCards-component'>
                {userDeckCardsList}
                <div className='userDeckCards-edit-button'>
                    <button>Edit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userDeckCards: state.userDeckCards
    }
}


export default connect(mapStateToProps)(UserDeckCards);