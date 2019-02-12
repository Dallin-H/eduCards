// routes.js will determine the routing for app.

// imports
import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Login from "./Components/Landing/Login/Login";
import Register from "./Components/Landing/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Quiz from "./Components/Quiz/Quiz/Quiz";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/quiz" component={Quiz} />
  </Switch>
);
