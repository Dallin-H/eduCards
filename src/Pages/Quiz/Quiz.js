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
// import axios from "axios";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card_id: 0,
      question: '',
      img_url: '',
      in_deck: 0,
      correctAnswer: '',
      falseAnswer1: '',
      falseAnswer2: '',
      falseAnswer3: ''
    };
  }

  //methods
  //componentDidMount for first question
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/card/${id}`)
    .then(res => {
      console.log('hit')
      this.setState({
        card_id: res.card.card_id,
        question: res.card.question,
        img_url: res.card.img_url,
        in_deck: res.card.in_deck
      })
    })
  }

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
        <Question 
          question={this.state.question}
          img_url={this.state.img_url}
        />
        <div> Select an answer below: </div>
        <Answer />
      </div>
    );
  }
}

export default Quiz;

