import React from 'react';
import './Answer.css';

function Answer(props) {
  const { correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3, selectCorrect, selectWrong } = props;
    return (
      <div className="Answer__Container">
        <div className="Answer__List">
          <div className="Answer__Correct"
          onClick={selectCorrect}
          >{correctAnswer}</div>
          <div className="Answer__Wrong"
          onClick={selectWrong}
          >{wrongAnswer1}</div>
          <div className="Answer__Wrong"
          onClick={selectWrong}
          >{wrongAnswer2}</div>
          <div className="Answer__Wrong"
          onClick={selectWrong}
          >{wrongAnswer3}</div>
        </div>
      </div>
    )
}

export default Answer;
