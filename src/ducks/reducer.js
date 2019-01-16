const INITIAL_STATE = {
    // the cards displayed in the search
    cards: [],
    
    // the name used to search through cards
    searchName: '',
    
    // flavor text used to search through cards
    searchText: '',
    
    //card type used in search through cards
    cardType: '',
    
    // 'unused' value of cards SET
    setName: null,
    
    //card in cards that is selected to add to deck
    selectedCard: '',
    
    // name of selected Card
    selectedName: '',
    
    // not used. Potential field input to search through the deck for a specific card
    searchTermDeck: '',
    
    // list of cards saved in the server selected from cards
    deckList: [],

    //user logged in
    user: null,

    //image of deck selected when creating a new deck
    deckImage: '',

    // name of deck when created
    deckName: '',

    //array of created decks
    decks: [],

    //cards of a given created deck
    userDeckCards: []
}

const SET_USER = 'SET_USER';
const UPDATE_CARDS = 'UPDATE_CARDS';
const UPDATE_SEARCH_NAME = 'UPDATE_SEARCH_NAME';
const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
const UPDATE_CARD_COLOR = 'UPDATE_CARD_COLOR';
const UPDATE_CARD_TYPE = 'UPDATE_CARD_TYPE';
const UPDATE_SET_NAME = 'UPDATE_SET_NAME';
const UPDATE_SELECTED_CARD = 'UPDATE_SELECTED_CARD';
const UPDATE_SELECTED_NAME = 'UPDATE_SELECTED_NAME';
const UPDATE_SEARCH_TERM_DECK = 'UPDATE_SEARCH_TERM_DECK';
const UPDATE_DECK_LIST = 'UPDATE_DECK_LIST';
const UPDATE_DECK_IMAGE = 'UPDATE_DECK_IMAGE';
const UPDATE_DECK_NAME = 'UPDATE_DECK_NAME';
const UPDATE_DECKS = 'UPDATE_DECKS';
const UPDATE_USER_DECK_CARDS = 'UPDATE_USER_DECK_CARDS';

export function reducer(state = INITIAL_STATE, action) {
    console.log('REDUCER HIT: Action =>', action);
    switch(action.type) {
        case SET_USER:
        return Object.assign({}, state, { user: action.payload });

        case UPDATE_CARDS:
        return Object.assign({}, state, { cards: action.payload})

        case UPDATE_SEARCH_NAME:
        return Object.assign({}, state, { searchName: action.payload });

        case UPDATE_SEARCH_TEXT:
        return Object.assign({}, state, { searchText: action.payload });
        
        case UPDATE_CARD_COLOR:
        return Object.assign({}, state, { cardColor: action.payload });
        
        case UPDATE_CARD_TYPE:
        return Object.assign({}, state, { cardType: action.payload });
        
        case UPDATE_SET_NAME:
        return Object.assign({}, state, { setName: action.payload });
        
        case UPDATE_SELECTED_CARD:
        return Object.assign({}, state, { selectedCard: action.payload });

        case UPDATE_SELECTED_NAME:
        return Object.assign({}, state, { selectedName: action.payload })
        
        case UPDATE_SEARCH_TERM_DECK:
        return Object.assign({}, state, { searchTermDeck: action.payload });

        case UPDATE_DECK_LIST:
        return Object.assign({}, state, { deckList: action.payload });

        case UPDATE_DECK_IMAGE:
        return Object.assign({}, state, { deckImage: action.payload });

        case UPDATE_DECK_NAME:
        return Object.assign({}, state, { deckName: action.payload });

        case UPDATE_DECKS:
        return Object.assign({}, state, { decks: action.payload });

        case UPDATE_USER_DECK_CARDS:
        return Object.assign({}, state, { userDeckCards: action.payload });

        default: return state;
    }
}

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export  function updateCards(cards) {
    return {
        type: UPDATE_CARDS,
        payload: cards
    }
}

export  function updateSearchName(searchName) {
    return {
        type: UPDATE_SEARCH_NAME,
        payload: searchName
    }
}

export function updateSearchText(searchText) {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: searchText
    }
}

export  function updateCardColor(cardColor) {
    return {
        type: UPDATE_CARD_COLOR,
        payload: cardColor
    }
}

export  function updateCardType(cardType) {
    return {
        type: UPDATE_CARD_TYPE,
        payload: cardType
    }
}

export  function updateSetName(setName) {
    return {
        type: UPDATE_SET_NAME,
        payload: setName
    }
}

export  function updateSelectedCard(selectedCard){
    return {
        type: UPDATE_SELECTED_CARD,
        payload: selectedCard
    }
}

export function updateSelectedName(selectedName){
    return {
        type: UPDATE_SELECTED_NAME,
        payload: selectedName
    }
}

export  function updateSearchTermDeck(searchTermDeck) {
    return {
        type: UPDATE_SEARCH_TERM_DECK,
        payload: searchTermDeck
    }
}

export  function updateDeckList(deckList) {
    return {
        type: UPDATE_DECK_LIST,
        payload: deckList
    }
}

export function updateDeckImage(deckImage) {
    return {
        type: UPDATE_DECK_IMAGE,
        payload: deckImage
    }
}

export function updateDeckName(deckName) {
    return {
        type: UPDATE_DECK_NAME,
        payload: deckName
    }
}

export function updateDecks(decks) {
    return {
        type: UPDATE_DECKS,
        payload: decks
    }
}

export function updateUserDeckCards(userDeckCards) {
    return {
        type: UPDATE_USER_DECK_CARDS,
        payload: userDeckCards
    }
}

export default reducer;