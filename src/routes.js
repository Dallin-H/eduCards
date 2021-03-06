// routes.js will determine the routing for app.

// imports
import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Quiz from "./Pages/Quiz/Quiz";
import DeckForm from "./Pages/DeckForm/DeckForm";
import CardForm from "./Pages/CardForm/CardForm";
import DeckEdit from "./Pages/DeckEdit/DeckEdit";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/quiz/:deckID" component={Quiz} />
    <Route path="/deckedit/:deckID" component={DeckEdit} />
    <Route path="/deckform" component={DeckForm} />
    <Route path="/cardform/:deckID" component={CardForm} />
  </Switch>
);
