create table users (
  user_id serial primary key,
  first_name varchar(20),
  last_name varchar(20),
  email varchar(40),
  password text,
  is_premium boolean
);

create table decks (
  deck_id serial primary key,
  title varchar(40),
  description varchar(200),
  img_url text,
  created_by int references users(user_id)
);

create table cards (
  card_id serial primary key,
  question varchar(200),
  img_url text,
  in_deck int references decks(deck_id)
);

create table availability (
  availability_id serial primary key,
  user_id int references users(id),
  deck_id int references decks(deck_id)
);

create table answers (
  answer_id serial primary key,
  answer_text text,
  is_correct boolean,
  in_card int references cards(card_id)
);
