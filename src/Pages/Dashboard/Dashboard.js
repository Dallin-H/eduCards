// Dashboard breakdown: display a list of decks
// Dashboard will store an array of decks on local state.
// On mount, component will check id on props, and session to verify user has access.
// Display a list of recently available decks
// click on a deck to move to quiz page.
// click a create button to create a new deck. a mobile with a deck form on it.

import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "./../../ducks/reducer";
// import { Link } from "react-router-dom";
import axios from "axios";
import Deck from "./../../Components/Deck/Deck";
import Nav from "./../../Components/Nav/Nav";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      decks: []
    };
  }

  componentDidMount() {
    const { userID } = this.props;
    if (!userID) {
      //double check sessions
      axios
        .post("/auth/user")
        .then(res => {
          // don't move
          this.props.updateUser(res.data);
        })
        .catch(err => {
          //boot to other page
          this.props.history.push("/login");
        });
    } else {
      // stay on current page
    }

    axios.get("/api/decks").then(res => {
      this.setState({
        decks: res.data
      });
    });
  }

  logout = () => {
    axios
      .post("/auth/logout")
      .then(res => {
        this.props.updateUser({});
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  startDeck = deckID => {
    this.props.history.push(`/quiz/${deckID}`);
  };

  editDeck = deckID => {
    this.props.history.push(`/deckedit/${deckID}`);
  }

  createNewDeck = () => {
    this.props.history.push(`/deckform`);
  };

  render() {
    const mappedDecks = this.state.decks.map(eachDeckObj => {
      return (
        <Deck
          key={eachDeckObj.deck_id}
          deckTitle={eachDeckObj.title}
          deckDescription={eachDeckObj.description}
          deckImg={eachDeckObj.img_url}
          deckID={eachDeckObj.deck_id}
          startDeck={this.startDeck}
          editDeck={this.editDeck}
        />
      );
    });
    return (
      <div className="Page__Dashboard">
        <Nav button1="Logout" location1="/" logout={this.logout} />
        <div className="Body__Container__Dashboard">
        <div className="Instructions__Dashboard"
        onClick={e => this.createNewDeck()}>Create New Deck</div>
        <div className="Linebreak" />
        <div className="Divider">
          <div className="Section1">
            Section1
          </div>
          <div className="Deck__List__Dashboard">{mappedDecks}</div>
          <div className="Section2">
            Section2
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { id } = reduxState;
  return {
    id
  };
};

const mapDispatchToProps = {
  updateUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
