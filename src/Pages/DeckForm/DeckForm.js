// Deck Form will take in the new deck info, store it in the database,
// then route to the CardForm page.

import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "./../../ducks/reducer";
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
      createdBy: ""
    };
  }

  componentDidMount() {
      const { userID } = this.props;
    this.setState({
        created_by: userID
    })
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    });
    console.log(this.state);
  }

  createDeck() {
    const { title, description, imgURL, createdBy } = this.state;
    axios
      .post("/api/createdeck", { title, description, imgURL, createdBy })
      .then(res => {
        this.props.history.push("/cardform");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
          <Nav />
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
        <button onClick={e => this.createDeck()}>Create Deck!</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
    return {
        userID:reduxState.userID
    }
}

const mapDispatchToProps = {
    updateUser
}
export default connect(mapStateToProps,
    mapDispatchToProps) (DeckForm);
