import React from 'react';
import './Answer.css';

function Answer(props) {
  const { correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3 } = props;
    return (
      <div className="Answer__Container">
        <div className="Answer__List">
          <div className="Answer__Correct">{correctAnswer}</div>
          <div className="Answer__Wrong">{wrongAnswer1}</div>
          <div className="Answer__Wrong">{wrongAnswer2}</div>
          <div className="Answer__Wrong">{wrongAnswer3}</div>
        </div>
      </div>
    )
}

export default Answer;
