import React from 'react';
import './Answer.css';

function Answer(props) {
  const { correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3 } = props;
    return (
      <div className="Answer__Container">
        <ul>
          <li>{correctAnswer}</li>
          <li>{wrongAnswer1}</li>
          <li>{wrongAnswer2}</li>
          <li>{wrongAnswer3}</li>
        </ul>
      </div>
    )
}

export default Answer;
