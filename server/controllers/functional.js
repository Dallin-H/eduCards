module.exports = {
  getAllDecks: (req, res) => {
    const db = req.app.get("db");
    db.decks.get_all_decks().then(decks => {
      res.status(200).send(decks);
    });
  },
  getDeck: (req, res) => {
    // retrieve a specific deck by deckID
    const { deckID } = req.params;
    const db = req.app.get("db");
    db.decks.get_one_deck({ deckID: deckID }).then(deckArr => {
      const deck = deckArr[0];
      res.status(200).send(deck);
    });
  },
  getDeckCards: (req, res) => {
    // populate state on quiz
    const { deckID } = req.params;
    const db = req.app.get("db");
    db.cards.get_deck_cards({ deckID: deckID }).then(cards => {
      res.status(200).send(cards);
    });
  },
  createDeck: (req, res) => {
    const { title, description, imgURL, createdBy } = req.body;
    const db = req.app.get("db");
    db.decks
      .create_new_deck({
        title: title,
        description: description,
        img_url: imgURL,
        created_by: createdBy
      })
      .then(deckIDArr => {
        const deckID = deckIDArr[0];
        res.status(200).send(deckID);
      });
  },
  updateDeck: (req, res) => {
    const { deckID, title, description, imgURL } = req.body;
    const db = req.app.get("db");
    db.decks
      .update_deck({
        deckID: deckID,
        title: title,
        description: description,
        imgURL: imgURL
      })
      .then(deckArr => {
        const deck = deckArr[0];
        res.status(200).send(deck);
      });
  },
  deleteDeck: (req, res) => {
    const {deckID} = req.body;
    const db = req.app.get("db");
    

    db.decks.delete_deck({deckID: deckID})
    .then( () => {
      res.sendStatus(200)
    })
  },
  getQuestion: (req, res) => {
    const db = req.app.get("db");
    // db.decks.
  },
  createCard: (req, res) => {
    let cardID = 0;
    const {
      question,
      imgURL,
      inDeck,
      correctAnswer,
      wrongAnswer1,
      wrongAnswer2,
      wrongAnswer3
    } = req.body;

    const db = req.app.get("db");
    db.cards
      .create_card({ question: question, img_url: imgURL, in_deck: inDeck })
      .then(newCardID => {
        cardID = newCardID[0].card_id;
        db.answers
          .create_answers({
            correct_Answer: correctAnswer,
            wrong_Answer1: wrongAnswer1,
            wrong_Answer2: wrongAnswer2,
            wrong_Answer3: wrongAnswer3,
            card_id: cardID
          })
          .then(() => {
            res.sendStatus(200);
          });
      });
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
