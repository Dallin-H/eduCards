import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "./../../ducks/reducer";
import Nav from "./../../Components/Nav/Nav";
import axios from "axios";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  register = () => {
    const { firstName, lastName, email, password } = this.state;
    axios
      .post("/auth/register", { firstName, lastName, email, password })
      .then(res => {
        this.props.updateUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // console.log(this.state)
    const { firstName, lastName, email, password } = this.state;

    return (
      <div>
        <Nav button1="Back" location1="/" />
        <div className="Body__Container__Register">
          <div className="Instructions__Register">
            {" "}
            Welcome! Fill out the form below to create an account.{" "}
          </div>
          <div className="Box__Register">
            <div className="Header__Register">First name:</div>
            <input
              value={firstName}
              onChange={e => this.handleChange("firstName", e.target.value)}
            />

            <div className="Header__Register">Last name:</div>
            <input
              value={lastName}
              onChange={e => this.handleChange("lastName", e.target.value)}
            />

            <div className="Header__Register">Email:</div>
            <input
              value={email}
              type="email"
              onChange={e => this.handleChange("email", e.target.value)}
            />

            <div className="Header__Register">Password:</div>
            <input
              type="new-password"
              value={password}
              onChange={e => this.handleChange("password", e.target.value)}
            />
            <button className="Button1__Register" onClick={this.register}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.user_id
  };
};

const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
