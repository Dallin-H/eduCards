// Question will take in props from Quiz.
// Question will display the question and image (if applicable)

import React from "react";
import "./Question.css";

function Question(props) {
  const { question, imgURL } = props;
  return (
    <div className="Question__Container">
      <div className="Question__Text">{question}</div>
      { !imgURL ? <div className="Filler" /> :
      <img className="Question__Img" src={`${imgURL}`} alt="" />
      }
    </div>
  );
}

export default Question;
