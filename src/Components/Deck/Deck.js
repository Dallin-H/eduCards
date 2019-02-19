// Deck will house the deck's title and description according to the index fed in through props from dashboard.
// need to add: image

import React from "react";

const Deck = props => {
  return (
    <div
    onClick={e => props.startDeck(props.deckID)}
    >
      <h1>{props.deckTitle}</h1>
      <div>{props.deckDescription}</div>
      <img src={`${props.deckImg}`} alt={`${props.deckTitle} cover`}
      style={{height: 100}}
      />
    </div>
  );
};

export default Deck;
