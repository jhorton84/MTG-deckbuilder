-- select * from decks
-- join users on decks.user_id = users.id;

select * from decks where user_id = $1;