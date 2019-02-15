module.exports = {
    getAllDecks: (req, res) => {
        const db = req.app.get("db");
        let decks = db.decks.get_all_decks();
        res.status(200).send(decks);
    },
    getOneDeck: () => {

    },
    createDeck: () => {

    },
    getQuestion: () => {

    },
    createQuestion: () => {

    },
    getAnswers: () => {
        
    },
    createAnswers: () => {

    }
}