let deckCards = [];
let id = 0;

module.exports = {
    readDeckCards: (req, res) => {
        res.status(200).send(deckCards)
    },

    postToDeckCards: (req, res) => {
        const {imageUrl, name} = req.body;
        const newMagicCard = {
            imageUrl,
            name: name.toLowerCase(),
            id
        }
        deckCards.push(newMagicCard);
        id++
        console.log('deckCard added', deckCards[deckCards.length-1]);
        res.status(200).send(deckCards);
    },

    updateDeckCard: (req, res) => {
        const {id} = req.params;
        const {imageUrl, name} = req.body;
        deckCards.forEach(card => {
            if(card.id === +id) {
                card.imageUrl = imageUrl;
                card.name = name.toLowerCase();
            }
        });
        res.status(200).send(deckCards);
    },

    deleteDeckCard: (req, res) => {
        const {id} = req.params;
        deckCards = deckCards.filter(card => {
            if(card.id !== +id){
                return card
            }
        });
        res.status(200).send(deckCards);
    },

    getDecks: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db');
        db.get_decks(id).then(decks => {
            res.status(200).send(decks);
        }).catch(error => {
            console.log('error in getDecks', error);
            res.status(500).send('Something is wrong with your server');
        })
    },

    createDeck: (req, res) => {
        console.log('req.body deck', req.body);
        const { deckName, deckImage, user_id } = req.body.deck;
        const { deckList } = req.body;
        const db = req.app.get('db');
        db.create_deck([
            deckName,
            deckImage,
            user_id
        ]).then(decks => {
            console.log('response in db', decks)
            const copyDeckList = deckList.map(e => {
                db.create_cards([
                    e.name,
                    e.imageUrl,
                    decks[decks.length-1].id
                ])
                .then(cards => {
                    console.log('cards in controller', cards);
                    // merged = cards;
                }).catch(error => {
                    console.log('error in cards arrays', error);
                })
                
            })
// Send copyDeckList up
            res.status(200).json(decks);

            // Promise.all(copyDeckList).then(response => {
            //     res.status(200).json(response);
            // }).catch(error => {
            //     console.log('Error on post/createCards', error);
            // })
            //end forLoop
        })
    },

    getUserDeckCards: (req, res) => {
        const { id } =  req.params;
        console.log('req.params id ==>', id);
        const db = req.app.get('db');
        db.get_deckCards(id).then(cards => {
            res.status(200).json(cards);
        }).catch(error => {
            console.log('Error in getUserDeckCards', error);
        })
    },

    deleteDeck: (req, res) => {
        console.log('req.params deleteDeck', req.params)
        const { id } = req.params;
        const db = req.app.get('db');
        db.delete_deck({id}).then(response => {
            res.status(200).json(response);
        })
    }
}