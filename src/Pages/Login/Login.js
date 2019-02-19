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
      <div className="Login__page">
        <Nav button1="Back" location1="/" />
        <div> Welcome back! </div>
        <form>
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
              value={password}
              type="current-password"
              onChange={e => this.handleChange("password", e.target.value)}
            />
          </div>
          <Link to="/dashboard">
            <button
            onClick={e => this.login()}
            >Login!</button>
          </Link>
        </form>
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
