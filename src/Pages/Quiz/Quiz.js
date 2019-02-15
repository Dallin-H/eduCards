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
      currentCardIndex: 0,
      cards: [],
      answers: [],
      card_id: 1,
      question: '',
      img_url: '',
      in_deck: 0,
      correctAnswer: 'y',
      wrongAnswer1: 'a',
      wrongAnswer2: 'b',
      wrongAnswer3: 'c'
    };
  }

  //methods
  //componentDidMount for first question
  componentDidMount() {

    const id = this.props.match.params.id;
    axios.get(`/api/card/${id}`)
    .then(res => {
      // console.log(res.data)
      this.setState({
        cards: res.data
      }, () => {
        this.displayCard()
      })
    })

    const cardID = this.state.card_id;
    axios.get( `/api/answers/${cardID}`)
    .then(res => {
      this.setState({
        answers: res.data
      }, () => {
        this.displayAnswers()
      })
    })
   
  }
  

  displayCard = () => {
    //axios call to get question from currentCardIndex
    this.setState({
      question: this.state.cards[this.state.currentCardIndex].question,
      card_id: this.state.cards[this.state.currentCardIndex].id
    })
  }

  displayAnswers = () => {
    //axios call to get answer from currentCardIndex
    this.setState({
      correctAnswer: this.state.answers[0].answer_text,
      wrongAnswer1: this.state.answers[1].answer_text,
      wrongAnswer2: this.state.answers[2].answer_text,
      wrongAnswer3: this.state.answers[3].answer_text,
    })
  }

  //next button will increment current card index
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
        <Answer 
        correctAnswer={this.state.correctAnswer}
        wrongAnswer1={this.state.wrongAnswer1}
        wrongAnswer2={this.state.wrongAnswer2}
        wrongAnswer3={this.state.wrongAnswer3}

        />
      </div>
    );
  }
}

export default Quiz;

