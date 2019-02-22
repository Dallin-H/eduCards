import React, { Component } from "react";
import Nav from "./../../Components/Nav/Nav";

class DeckEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckID: 0,
      deckTitle: "",
      deckDescription: "",
      deckImgURL: "",
      deckCreatedBy: 0,
      cards: []
    };
  }

  componentDidMount() {
    let deckID = this.props.match.params.deckID;
    this.setState({
      deckID
    });
  }

  render() {
      const { deckTitle, deckDescription, deckImgURL } = this.state;
    return (
      <div>
        <Nav
          button1="Dashboard"
          location1="/dashboard"
          button2="Logout"
          location2="/"
        />
        <div>
          Deck content
          <form>
              <div>Title:</div>
              <input value={deckTitle} />
              <div>Description:</div>
              <input value={deckDescription} />
              <div>Image URL:</div>
              <input value={deckImgURL} />
          </form>
          <div>
            <button>Update Deck</button>
          </div>
        </div>
        <div>Cards</div>
      </div>
    );
  }
}

export default DeckEdit;
