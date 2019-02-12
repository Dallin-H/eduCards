import React, { Component } from 'react';
import Answer from './Components/Answer/Answer';
import Nav from './Components/Nav/Nav';
import Question from './Components/Question/Question';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav  />
        <Question />
        <Answer />
      </div>
    );
  }
}

export default App;
