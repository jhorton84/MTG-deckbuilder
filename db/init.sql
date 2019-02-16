drop table if exists users;
drop table if exists decks;
drop table if exists cards;

create table if not exists users (
    id serial,
    name varchar(50) not null,
    email varchar(50) not null,
    picture text,
    auth0_id text
);

create table if not exists decks (
    id serial primary key,
    name varchar(50) not null,
    deckImage text
);

create table if not exists cards (
    id serial primary key,
    name text,
    imageUrl text,
    deck_id integer references decks(id)
);

select * from users;

select * from decks;

select * from cards;

select * from cards
join decks on cards.deck_id = decks.id;