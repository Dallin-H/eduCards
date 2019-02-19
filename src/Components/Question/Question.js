// Question will take in props from Quiz. 
// Question will display the question and image (if applicable)


import React from 'react';
import './Question.css';

function Question (props) {
  const { question, img_url } = props;
    return (
      <div className="Question__Container">
        <div>
          {question}
          </div>
          <div>
            <img 
            style={{
              height: 100
            }}
            src={`${img_url}`} alt='' />
          </div>
      </div>
    );
  }

export default Question;