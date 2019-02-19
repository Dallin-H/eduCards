// CardForm will take in the new card info, store it in the database,
// then the user can either make another card, view the deck, or return to the database.

import React, { Component } from "react";
// import axios from "axios";
import "./CardForm.css";

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

  render() {
    return (
      <div>
        <form>
          <div>Deck Name:</div>
          <input />
          <div>Description:</div>
          <input />
          <div>Image URL:</div>
          <input />
        </form>
      </div>
    );
  }
}

export default CardForm;