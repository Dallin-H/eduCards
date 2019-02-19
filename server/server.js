// server.js will host the server. It will import necessary packages, establish and listen to port,
// establish the session secret, and hose the endpoints.

//imports
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const ac = require("./controllers/auth");
const fc = require("./controllers/functional");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: null
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(SERVER_PORT, () => console.log("App + DB listening on port: ", SERVER_PORT));
});

// Authentication Endpoints
app.post("/auth/register", ac.register);
app.post("/auth/login", ac.login);
app.post("/auth/logout", ac.logout);
app.post("/auth/user", ac.getUser);


// Standard Functionality Endpoints

app.get("/api/decks", fc.getAllDecks) // displays decks on the dashboard
app.get("/api/card/:deckID", fc.getDeckCards) // populates state in quiz
app.get("/api/answers/:cardID", fc.getAnswers) // display answers for a question in quiz

app.post("/api/createdeck", fc.createDeck) // creates a new deck
app.get("/api/getdeckbytitle/:title", fc.getDeckByTitle)