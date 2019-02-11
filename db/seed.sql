create table users (
  id serial primary key,
  first_name varchar(20),
  last_name varchar(20),
  email varchar(40),
  password text,
  is_premium boolean
);

create table decks (
  id serial primary key,
  title varchar(40),
  description varchar(200),
  img_url text,
  created_by int references users(id)
);

create table cards (
  id serial primary key,
  question varchar(200),
  img_url text,
  in_deck int references decks(id)
);

create table availability (
  id serial primary key,
  user_id int references users(id),
  deck_id int references decks(id)
);

create table answers (
  id serial primary key,
  answer_text text,
  is_correct boolean,
  in_card int references cards(id)
);
