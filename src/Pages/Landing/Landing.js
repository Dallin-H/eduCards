import React from "react";
import Nav from "./../../Components/Nav/Nav";
import "./Landing.css";

function Landing() {
  return (
    <div className="Page__Landing">
      <Nav
        button1="Register"
        location1="/register"
        button2="Login"
        location2="/login"
      />
      <div className="Body__Container__Landing">
        <div className="Desktop__View">
          <div className="Box__Landing__Intro">
            <div className="TextBox__Landing__Intro">
              Welcome! To get started, please create an account
            </div>
          </div>
          <div className="Desktop__Family">
            <div className="Box__Landing">
              <div className="TextBox__Landing">Create Decks</div>
            </div>

            <div className="Box__Landing">
              <div className="TextBox__Landing">
                Create cards for the deck, with one correct answer, and three
                wrong answers
              </div>
            </div>

            <div className="Box__Landing">
              <div className="TextBox__Landing">Start practicing!</div>
            </div>
          </div>
        </div>

        <div className="Mobile__View">
          <div className="Box__Landing">
            <div className="TextBox__Landing">
              Welcome! To get started, please create an account
            </div>
          </div>
          <div className="Box__Landing">
            <div className="TextBox__Landing">Create Decks</div>
          </div>

          <div className="Box__Landing">
            <div className="TextBox__Landing">
              Create cards for the deck, with one correct answer, and three
              wrong answers
            </div>
          </div>

          <div className="Box__Landing">
            <div className="TextBox__Landing">Start practicing!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
