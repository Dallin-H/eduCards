update decks
set title = ${title},
    description = ${description},
    img_url = ${imgURL}
where deck_id = ${deckID};