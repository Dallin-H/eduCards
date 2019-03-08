import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "./../../ducks/reducer";
import { Link } from "react-router-dom";
import Nav from "./../../Components/Nav/Nav";
import "./Login.css";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    const { userID } = this.props;
    if (userID) {
      // take user to dashboard
      this.props.history.push("/dashboard");
    } else {
      //double check sessions
      axios
        .post("/api/user")
        .then(res => {
          this.props.updateUser(res.data);
          this.props.history.push("/dashboard");
        })
        .catch(err => {
          // stay on login page
        });
    }
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  login = () => {
    const { email, password } = this.state;
    axios
      .post("/auth/login", { email, password })
      .then(res => {
        this.props.updateUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="Page__Login">
        <div className="Body__Container__Login">
          <Nav button1="Back" location1="/" />
          <div className="Instructions__Login"> Welcome back! </div>
          <div className="Box__Login">
            <div className="Box2__Login">

            <div className="Login__Text">
              <div className="Header__Login">Email:</div>
              <div className="Header__Login">Password:</div>
            </div>
            <div className="Login__Inputs">
              <input
                className="Input__Login"
                value={email}
                type="email"
                onChange={e => this.handleChange("email", e.target.value)}
              />
              <input
                className="Input__Login"
                value={password}
                type="current-password"
                onChange={e => this.handleChange("password", e.target.value)}
              />
            </div>
            </div>
            <Link to="/dashboard">
              <button className="Button1__Login" onClick={e => this.login()}>
                Login!
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userID: reduxState.userID
  };
};

const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
