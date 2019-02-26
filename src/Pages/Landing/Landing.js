import React from "react";
import Nav from "./../../Components/Nav/Nav";
import "./Landing.css";

function Landing() {
  return (
    <div className="Landing__Page">
      <Nav
        button1="Register"
        location1="/register"
        button2="Login"
        location2="/login"
      />
      <div className="Body__Container">
        <div className="Box">
          <div className="TextBox">
            Welcome! To get started, please create an account
          </div>
        </div>
        <div className="Box">
          <div className="TextBox">Create Decks</div>
        </div>
        <div className="Box">
          <div className="TextBox">
            Create cards for the deck, with one correct answer, and three
            wrong answers
          </div>
        </div>
        <div className="Box">
          <div className="TextBox">
            Start practicing!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
