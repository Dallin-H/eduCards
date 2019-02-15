// Quiz will need to take in a deck ID.
// it will pull a corresponding deck that matches the id using axios.
// it will display a question
// it will display that questions 4 answers, 1 correct and three wrong.
// when clicked, the answer will change to green if right.
// when clicked, the answer will change to red if wrong and highlight the correct in green.
// I need a next card button. 
//    the next card button will randomly select the next card to display.

import React, { Component } from "react";
import Question from "./../../Components/Question/Question";
import Answer from "./../../Components/Answer/Answer";
import Nav from "./../../Components/Nav/Nav";
import axios from "axios";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {};
  }

  //methods
  //componentDidMount for first question

  render() {
    return (
      <div className="Quiz__Container">
        <Nav
          button1="Dashboard"
          location1="/dashboard"
          button2="Logout"
          location2="/"
        />
        <div> Question </div>
        <Question />
        <div> Select an answer below: </div>
        <Answer />
      </div>
    );
  }
}

export default Quiz;

