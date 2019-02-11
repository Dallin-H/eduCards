import React, { Component } from 'react';
import Answer from './Components/Answer/Answer';
import Nav from './Components/Nav/Nav';
import Question from './Components/Question/Question';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav className="Nav__Container" />
        <Answer className="Answer__Container" />
        <Question className="Question__Container" />
      </div>
    );
  }
}

export default App;
