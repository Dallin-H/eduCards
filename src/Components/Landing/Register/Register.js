import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

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

  render() {
    return (
      <div className="Register__page">
        <div> Welcome! Fill out the form below to create an account. </div>
        <div>
          <input />
          <input />
          <input />
          <input />
          <Link to="dashboard">
            <button>Create Account</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
