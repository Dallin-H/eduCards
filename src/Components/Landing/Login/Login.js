import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="Login__page">
        <div> Welcome back! </div>
        <div>
          <input />
          <input />
          <Link to="/dashboard"><button>Login!</button></Link>
        </div>
      </div>
    );
  }
}

export default Login;
