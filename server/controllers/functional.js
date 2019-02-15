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
  getOneCard: (req, res) => {
    // populate state on quiz
    const { deck_id } = req.params;
    const db = req.app.get("db");
    db.cards.get_one_card({ deck_id: deck_id }).then(cards => {
        let card = cards[0]
      res.status(200).send(card);
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
    const db = req.app.get("db");
    // db.decks.
  },
  createAnswers: (req, res) => {
    const db = req.app.get("db");
    // db.decks.
  }
};
