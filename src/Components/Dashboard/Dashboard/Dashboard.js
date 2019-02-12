import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./../Nav/Nav";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="Dashboard__Container">
        <Nav />
        <aside>Decks</aside>
        <div className="Body__Container">
          <Link to="/quiz">
            <div className="Quiz__Button">Start Quiz!</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
