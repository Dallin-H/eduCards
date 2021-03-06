import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./ducks/store";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import "./reset.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">{routes}</div>
        </Router>
      </Provider>
    );
  }
}

export default App;
