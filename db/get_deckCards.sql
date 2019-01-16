select * from cards
join decks on cards.deck_id = decks.id
where decks.id = $1;