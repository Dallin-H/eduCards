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
      first_name: "",
      last_name: "",
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
    const { first_name, last_name, email, password } = this.state;
    axios
      .post("/auth/register", { first_name, last_name, email, password })
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
    const { first_name, last_name, email, password } = this.state;

    return (
      <div className="Register__page">
        <Nav button1="Back" location1="/" />
        <div> Welcome! Fill out the form below to create an account. </div>
        <form>
          <div>
            <div>First name:</div>
            <input
              value={first_name}
              onChange={e => this.handleChange("first_name", e.target.value)}
            />
          </div>
          <div>
            <div>Last name:</div>
            <input
              value={last_name}
              onChange={e => this.handleChange("last_name", e.target.value)}
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
    id: reduxState.id
  }
}

const mapDispatchToProps = {
  updateUser
}

export default connect(mapStateToProps, mapDispatchToProps) (Register);
