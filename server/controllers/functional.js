module.exports = {
  getAllDecks: (req, res) => {
    const db = req.app.get("db");
    db.decks.get_all_decks().then(decks => {
      res.status(200).send(decks);
    });
  },
  getOneDeck: (req, res) => {
    // retrieve a specific deck to display as a thumbnail on the quiz page.
    const db = req.app.get("db");
    // db.decks.
  },
  getDeckCards: (req, res) => {
    // populate state on quiz
    const { deckID } = req.params;
    const db = req.app.get("db");
    db.cards.get_deck_cards({ deck_id: deckID })
    .then(cards => {
      res.status(200).send(cards);
    });
  },
  createDeck: (req, res) => {
    const { title, description, imgURL, createdBy } = req.body;
    const db = req.app.get("db");
    db.decks.create_new_deck({
      title: title,
      description: description,
      img_url: imgURL,
      created_by: createdBy
    })
    .then( deckID => {
      const deckID2 = deckID[0]
      console.log(deckID2)
      res.status(200).send(deckID2)
    });
  },
  getDeckByTitle: (req, res) => {
    const { title } = req.body;
    const db = req.app.get("db");
    db.decks.get_deck_by_title({title: title})
    .then(deck_id => {
      res.status(200).send(deck_id)
    })
  },
  getQuestion: (req, res) => {
    const db = req.app.get("db");
    // db.decks.
  },
  createQuestion: (req, res) => {
    const db = req.app.get("db");
    // db.decks.
  },
  getAnswers: (req, res) => {
    // populate answers on quiz
    const { cardID } = req.params;
    const db = req.app.get("db");
    db.answers.get_answers({ card_id: cardID }).then(answers => {
      res.status(200).send(answers);
      // console.log({answers})
    });
  },
  createAnswers: (req, res) => {
    const db = req.app.get("db");
    // db.decks.
  }
};
