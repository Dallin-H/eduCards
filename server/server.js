// server.js will host the server. It will import necessary packages, establish and listen to port,
// establish the session secret, and hose the endpoints.

//imports
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const session = require('express-session')
const massive = require("massive");
const authctrl = require("./controllers/auth");

const { PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(bodyParser.json());
// app.use(session({
//     secret: SESSION_SECRET,
//     resave: true,
//     saveUninitialized: false
// }))

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(PORT, () => console.log("App + DB listening on port: ", PORT));
});

// Authorization Endpoints

// Standard Functionality Endpoints
