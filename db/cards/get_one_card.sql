select * from cards
where in_deck = ${deck_id}
returning card_id, question, img_url, in_deck;