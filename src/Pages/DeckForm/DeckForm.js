// Deck Form will take in the new deck info, store it in the database,
// then route to the CardForm page.

import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./../../Components/Nav/Nav";
import axios from "axios";
import "./DeckForm.css";

class DeckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imgURL: "",
      createdBy: 0,
      deckID: 0
    };
  }

  componentDidMount() {
    const { userID } = this.props;
    this.setState({
      createdBy: userID
    });
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  createDeck() {
    const { title, description, imgURL, createdBy } = this.state;
    axios
      .post("/api/createdeck", { title, description, imgURL, createdBy })
      .then(res => {
        this.setState({
          deckID: res.data.deck_id
        })
        this.props.history.push(`/cardform/${this.state.deckID}`)})
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Nav
          button1="Dashboard"
          location1="/dashboard"
          button2="Logout"
          location2="/"
        />
        <form>
          <div>Deck Name:</div>
          <input onChange={e => this.handleChange("title", e.target.value)} />
          <div>Description:</div>
          <input
            onChange={e => this.handleChange("description", e.target.value)}
          />
          <div>Image URL:</div>
          <input onChange={e => this.handleChange("img_url", e.target.value)} />
        </form>
        <button onClick={ () => this.createDeck()}>Create Deck!</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userID: reduxState.userID
  };
};

export default connect(mapStateToProps)(DeckForm);
