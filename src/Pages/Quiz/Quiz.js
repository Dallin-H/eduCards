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

import "./Quiz.css";
// import axios from "axios";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCardIndex: 0,
      cards: [],
      answers: [],
      cardID: 0,
      question: "",
      imgURL: "",
      inDeck: 0,
      correctAnswer: "",
      wrongAnswer1: "",
      wrongAnswer2: "",
      wrongAnswer3: ""
    };
  }

  //methods
  //componentDidMount for first question
  componentDidMount() {
    let deckID = this.props.match.params.deckID;
    axios.get(`/api/card/${deckID}`).then(res => {
      this.setState(
        {
          cards: res.data
        },
        () => {
          this.displayCard();
        }
      );
    });
  }

  displayCard = () => {
    //axios call to get question from currentCardIndex

    this.setState(
      {
        cardID: this.state.cards[this.state.currentCardIndex].card_id,
        question: this.state.cards[this.state.currentCardIndex].question,
        imgURL: this.state.cards[this.state.currentCardIndex].img_url
      },
      () => {
        this.getAnswers();
      }
    );
  };

  getAnswers = () => {
    const cardID = this.state.cardID;
    axios.get(`/api/answers/${cardID}`).then(res => {
      this.setState(
        {
          answers: res.data
        },
        () => {
          this.displayAnswers();
        }
      );
    });
  };

  displayAnswers = () => {
    //axios call to get answer from currentCardIndex
    this.setState({
      correctAnswer: this.state.answers[0].answer_text,
      wrongAnswer1: this.state.answers[1].answer_text,
      wrongAnswer2: this.state.answers[2].answer_text,
      wrongAnswer3: this.state.answers[3].answer_text
    });
  };

  selectCorrect = () => {
    alert("That is correct! Here is your next card");
    let { cards } = this.state;
    let newCurrentCardIndex = Math.floor(Math.random() * cards.length);
    this.setState({
      currentCardIndex: newCurrentCardIndex
    });
    this.displayCard();
    this.displayAnswers();
  };

  selectWrong() {
    alert("Sorry, please try again.");
  }

  //next button will increment current card index
  render() {
    return (
      <div className="Quiz__Container">
        <div className="Body__Quiz">
          <Nav
            button1="Dashboard"
            location1="/dashboard"
            button2="Logout"
            location2="/"
          />
          <div className="Header__Quiz"> Question: </div>
          <div className="Linebreak__Quiz" />
          <Question question={this.state.question} imgURL={this.state.imgURL} />
          <div className="Header__Quiz"> Select an answer below: </div>
          <div className="Linebreak__Quiz" />
          <Answer
            correctAnswer={this.state.correctAnswer}
            wrongAnswer1={this.state.wrongAnswer1}
            wrongAnswer2={this.state.wrongAnswer2}
            wrongAnswer3={this.state.wrongAnswer3}
            selectCorrect={this.selectCorrect}
            selectWrong={this.selectWrong}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
