import React from 'react';

const Deck = (props) => {
    return (
        <div>
            <h3>{props.deck.title}</h3>
            <p>{props.deck.description}</p>
            </div>
    )
}

export default Deck;