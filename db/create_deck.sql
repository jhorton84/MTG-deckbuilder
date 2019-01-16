insert into decks (name, deckImage, user_id)
values ($1, $2, $3);
select * from decks where user_id = $3;