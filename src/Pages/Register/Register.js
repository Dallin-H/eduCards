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
        <div className="Body__Container__Register">
          <Nav button1="Back" location1="/" />
          <div className="Instructions__Register">
            Fill out the form below to create an account.
          </div>
          <div className="Box__Register">
            <div className="Box2__Register">
              <div className="Register__Text">
                <div className="Header__Register">First name:</div>
                <div className="Header__Register">Last name:</div>
                <div className="Header__Register">Email:</div>
                <div className="Header__Register">Password:</div>
              </div>

              <div className="Register__Inputs">
                <input className="Input__Register"
                  value={firstName}
                  onChange={e => this.handleChange("firstName", e.target.value)}
                />
                <input className="Input__Register"
                  value={lastName}
                  onChange={e => this.handleChange("lastName", e.target.value)}
                />
                <input className="Input__Register"
                  value={email}
                  type="email"
                  onChange={e => this.handleChange("email", e.target.value)}
                />
                <input className="Input__Register"
                  type="new-password"
                  value={password}
                  onChange={e => this.handleChange("password", e.target.value)}
                />
              </div>

            </div>
            <button className="Button1__Register" onClick={this.register}>
              Create Account
            </button>
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
