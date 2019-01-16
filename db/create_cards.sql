insert into cards (name, imageUrl, deck_id)
values ($1, $2, $3);
select * from cards;