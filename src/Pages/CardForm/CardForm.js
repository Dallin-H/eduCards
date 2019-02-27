// CardForm will take in the new card info, store it in the database,
// then the user can either make another card, view the deck, or return to the database.

import React, { Component } from "react";
// import axios from "axios";
import Nav from "./../../Components/Nav/Nav";
import "./CardForm.css";
import axios from "axios";

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      imgURL: "",
      inDeck: "",
      correctAnswer: "",
      wrongAnswer1: "",
      wrongAnswer2: "",
      wrongAnswer3: ""
    };
  }

  componentDidMount() {
    let deckID = this.props.match.params.deckID;
    this.setState({
      inDeck: deckID
    });
    //axios call to get the deck title for ux
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  clearAll() {
    this.setState({
      question: "",
      imgURL: "",
      correctAnswer: "",
      wrongAnswer1: "",
      wrongAnswer2: "",
      wrongAnswer3: ""
    });
  }

  createCard() {
    //axios call to post in db.
    const {
      question,
      imgURL,
      inDeck,
      correctAnswer,
      wrongAnswer1,
      wrongAnswer2,
      wrongAnswer3
    } = this.state;
    axios
      .post("api/createcard", {
        question,
        imgURL,
        inDeck,
        correctAnswer,
        wrongAnswer1,
        wrongAnswer2,
        wrongAnswer3
      })
      .then(() => {
        this.setState({
          question: "",
          imgURL: "",
          correctAnswer: "",
          wrongAnswer1: "",
          wrongAnswer2: "",
          wrongAnswer3: ""
        });
        alert("Card Created!");
      })
      .catch(err => {
        console.log(err);
      });
  }

  startQuiz() {
    const { inDeck } = this.state;
    this.props.history.push(`/quiz/${inDeck}`);
  }

  render() {
    return (
      <div>
        <Nav
          button1="Dashboard"
          location1="/dashboard"
          button2="Logout"
          location2="/"
        />
        <div className="CardForm__Page">
          <div className="Spacer__CardForm" />
          <div className="CardForm__Box">

          <div className="Header__CardForm">Insert a card for your deck:</div>
          
            <div className="Header__CardForm">Question:</div>
            <input
              onChange={e => this.handleChange("question", e.target.value)}
              value={this.state.question}
            />
            <div className="Header__CardForm">Image URL: (if applicable)</div>
            <input
              onChange={e => this.handleChange("imgURL", e.target.value)}
              value={this.state.imgURL}
            />
            <div className="Header__CardForm">Correct Answer:</div>
            <input
              onChange={e => this.handleChange("correctAnswer", e.target.value)}
              value={this.state.correctAnswer}
            />
            <div className="Header__CardForm">Wrong Answer:</div>
            <input
              onChange={e => this.handleChange("wrongAnswer1", e.target.value)}
              value={this.state.wrongAnswer1}
            />
            <div className="Header__CardForm">Wrong Answer:</div>
            <input
              onChange={e => this.handleChange("wrongAnswer2", e.target.value)}
              value={this.state.wrongAnswer2}
            />
            <div className="Header__CardForm">Wrong Answer:</div>
            <input
              onChange={e => this.handleChange("wrongAnswer3", e.target.value)}
              value={this.state.wrongAnswer3}
            />
         
          <div className="Buttons__CardForm">
            <button
              className="Button1__CardForm"
              onClick={() => this.clearAll()}
            >
              Clear all
            </button>
            <button
              className="Button1__CardForm"
              onClick={() => this.createCard()}
            >
              Add card!
            </button>
          </div>
          <button
            className="Button1__CardForm"
            onClick={() => this.startQuiz()}
          >
            Start test!
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardForm;
