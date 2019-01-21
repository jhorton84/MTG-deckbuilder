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
                <div className={this.props.user ? 'deck-card-images' : 'hide'}>
                    <img src={card.imageurl} onClick />
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
        userDeckCards: state.userDeckCards,
        user: state.user
    }
}


export default connect(mapStateToProps)(UserDeckCards);