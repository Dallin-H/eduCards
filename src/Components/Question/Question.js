// Question will take in props from Quiz. 
// Question will display the question and image (if applicable)


import React from 'react';
import './Question.css';

function Question (props) {
    return (
      <div className="Question__Container">
        <div>
          {props.question}
          </div>
          <div>
            <img src={`${props.img_url}`} alt={`${props.question}`} />
          </div>

      </div>
    );
  }

export default Question;