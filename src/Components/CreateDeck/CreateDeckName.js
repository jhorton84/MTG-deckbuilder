import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDeckName } from '../../ducks/reducer';
import { updateDecks } from '../../ducks/reducer';
import axios from 'axios';

class CreateDeckName extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    saveDeckCards = () => {
        console.log('save deck props', this.props);
        const { deckList, deckImage, deckName, user } = this.props;
        let deck = {
            deckName,
            deckImage,
            user_id : user.auth0_id
        }
        console.log('deck object', deck);
        axios.post('/api/decks', {deckList, deck}).then(response => {
            console.log(' saved decks ------->',response)
            this.props.updateDecks(response.data);
        })
    }
    render(){
        return (
            <div className='CreateDeck-component'>
                <div>
                    <h1>Name your Deck</h1>
                    <input onChange={e => this.props.updateDeckName(e.target.value)} placeholder='deck name'/>
                </div>
                <div className='createDeck-button'>
                    <Link to='/Decks'><button onClick={()=>{this.saveDeckCards()}}>Save</button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        deckName: state.deckName,
        deckImage: state.deckImage,
        decks: state.decks,
        deckList: state.deckList,
        user: state.user
    }
}

const mapDispatchToProps = {
    updateDeckName: updateDeckName,
    updateDecks: updateDecks
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckName);