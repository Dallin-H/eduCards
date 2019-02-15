// Dashboard breakdown: display a list of decks 
// Dashboard will store an array of decks on local state.
// On mount, component will check id on props, and session to verify user has access.



import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "./../../ducks/reducer";
import { Link } from "react-router-dom";
import axios from "axios";
import Deck from "./../../Components/Deck/Deck";
import Nav from "./../../Components/Nav/Nav";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      decks: [
        {
          id: 1,
          name: "deckName",
          description: "deckDescription"
        },
        {
          id: 2,
          name: "deckName2",
          description: "deckDescription2"
        }
      ]
    };
  }

  componentDidMount() {
    const { id } = this.props;
    if (!id) {
      //double check sessions
      axios
        .post("/api/user")
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

  getDecks() {
    axios.get("/api/decks").then(res => {
      console.log(res.body);
      this.setState({
        decks: res.data
      });
    });
  }

  render() {
    const mappedDecks = this.state.decks.map(eachDeckObj => {
      return <Deck key={eachDeckObj.index} deck={eachDeckObj} />;
    });
    return (
      <div className="Dashboard__Container">
        <Nav button1="Logout" location1="/" logout={this.logout} />
        <button>Decks</button>
        <div className="Body__Container">
          <Link to="/quiz">
            <div className="Quiz__Button">{mappedDecks}</div>
          </Link>
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
