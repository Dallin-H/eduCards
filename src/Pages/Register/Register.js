import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from './../../ducks/reducer';
import Nav from "./../../Components/Nav/Nav";
import "./Register.css";
import axios from "axios";

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
      <div className="Register__page">
        <Nav button1="Back" location1="/" />
        <div> Welcome! Fill out the form below to create an account. </div>
        <form>
          <div>
            <div>First name:</div>
            <input
              value={firstName}
              onChange={e => this.handleChange("firstName", e.target.value)}
            />
          </div>
          <div>
            <div>Last name:</div>
            <input
              value={lastName}
              onChange={e => this.handleChange("lastName", e.target.value)}
            />
          </div>
          <div>
            <div>Email:</div>
            <input
              value={email}
              type="email"
              onChange={e => this.handleChange("email", e.target.value)}
            />
          </div>
          <div>
            <div>Password:</div>
            <input
              type="new-password"
              value={password}
              onChange={e => this.handleChange("password", e.target.value)}
            />
          </div>

          <button onClick={this.register}>Create Account</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.user_id
  }
}

const mapDispatchToProps = {
  updateUser
}

export default connect(mapStateToProps, mapDispatchToProps) (Register);
