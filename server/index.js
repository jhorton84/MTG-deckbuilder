const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();
const ac = require('./authController');
const cc = require('./controller');


const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
}));
// Middleware

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
});


app.use( express.static( `${__dirname}/../build` ) );

// Endpoints
//auth0 endpoints
app.get('/auth/callback', ac.login);
app.get('/auth/user-data', ac.getUser);
app.post('/auth/logout', ac.logout);
//deckBuilder endpoints
app.get('/api/gathering', cc.readDeckCards);
app.post('/api/gathering', cc.postToDeckCards);
app.put('/api/gathering/:id', cc.updateDeckCard);
app.delete('/api/gathering/:id', cc.deleteDeckCard);

app.get('/api/decks/:id', cc.getDecks);
app.post('/api/decks', cc.createDeck);
app.delete('/api/decks/:id', cc.deleteDeck);
app.get('/api/deckCards/:id', cc.getUserDeckCards);

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 4000;
app.listen(PORT, ()=> {
    console.log(`The server is listening on port: ${PORT}`)
});

