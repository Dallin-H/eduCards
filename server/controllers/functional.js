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
    const { deck_id } = req.params;
    const db = req.app.get("db");
    db.cards.get_deck_cards({ deck_id: deck_id })
    .then(cards => {
      res.status(200).send(cards);
    });
  },
  createDeck: (req, res) => {
    const db = req.app.get("db");
    // db.decks.
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
    const {card_id} = req.params;
    const db = req.app.get("db");
    db.answers.get_answers({card_id: card_id})
    .then((answers => {
        res.status(200).send(answers);
        // console.log({answers})
    }))
  },
  createAnswers: (req, res) => {
    const db = req.app.get("db");
    // db.decks.
  }
};
