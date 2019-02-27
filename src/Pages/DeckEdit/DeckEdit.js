import React, { Component } from "react";
import Nav from "./../../Components/Nav/Nav";
import axios from "axios";
import "./DeckEdit.css";

class DeckEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckID: 0,
      title: "",
      description: "",
      imgURL: "",
      deckCreatedBy: 0,
      cards: []
    };
  }

  componentDidMount() {
    let deckID = this.props.match.params.deckID;
    this.setState({
      deckID
    });
    axios
      .get(`/api/getdeck/${deckID}`)
      .then(res => {
        this.setState({
          title: res.data.title,
          description: res.data.description,
          imgURL: res.data.img_url
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  updateDeck = () => {
    const { deckID, title, description, imgURL } = this.state;
    axios
      .put(`/api/updatedeck`, { deckID, title, description, imgURL })
      .then(res => {
        alert("Changes saved!");
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteDeck = () => {
    const { deckID } = this.state;
    axios
      .delete(`/api/deletedeck/${deckID}`)
      .then(res => {
        alert("Deck has been deleted");
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { title, description, imgURL } = this.state;

    return (
      <div>
        <Nav
          button1="Dashboard"
          location1="/dashboard"
          button2="Logout"
          location2="/"
        />
        <div className="Body__DeckEdit">
          <div className="Spacer__DeckEdit" />
          <div className="Form__Container__DeckEdit">
            <div className="Header__DeckEdit">Title:</div>
            <input
              value={title}
              onChange={e => this.handleChange("title", e.target.value)}
            />
            <div className="Header__DeckEdit">Description:</div>
            <input
              value={description}
              onChange={e => this.handleChange("description", e.target.value)}
            />
            <div className="Header__DeckEdit">Image URL:</div>
            <input
              value={imgURL}
              onChange={e => this.handleChange("imgURL", e.target.value)}
            />
            <div className="Buttons__DeckEdit">
              <button className="Button1__DeckEdit" onClick={this.updateDeck}>
                Update
              </button>
              <button className="Button1__DeckEdit" onClick={this.deleteDeck}>
                Delete
              </button>
            </div>
          </div>
          <div>Cards</div>
        </div>
      </div>
    );
  }
}

export default DeckEdit;
