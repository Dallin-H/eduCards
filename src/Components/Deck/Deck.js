// Deck will house the deck's title and description according to the index fed in through props from dashboard.
// need to add: image

import React from "react";
import "./Deck.css";

const Deck = props => {
  return (
    <div className="Deck__Container">
      <h1>{props.deckTitle}</h1>
      <div>{props.deckDescription}</div>
      <img
        src={`${props.deckImg}`}
        alt={`${props.deckTitle} cover`}
        style={{ height: 100 }}
      />
      <div className="Button_Container">
        <button onClick={e => props.startDeck(props.deckID)}>
          Start Quiz!
        </button>
        <button onClick={e => props.editDeck(props.deckID)}>
          Edit Deck</button>
      </div>
    </div>
  );
};

export default Deck;
