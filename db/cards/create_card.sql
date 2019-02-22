insert into cards( question, img_url, in_deck )
values( ${question}, ${img_url}, ${in_deck} )
returning card_id;