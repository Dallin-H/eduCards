import React, { Component } from "react";
import Question from "./../Question/Question";
import Answer from "./../Answer/Answer";
import Nav from "./../Nav/Nav"

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
          <Nav />
        <div> Question </div>
        <Question />
        <div> Select an answer below: </div>
        <Answer />
      </div>
    );
  }
}

export default Quiz;
