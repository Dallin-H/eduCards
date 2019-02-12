import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav__Container">
      <div className="logo">eduCards</div>
      <div className="links">
        <Link to='/'><div>logout</div></Link>
      </div>
    </div>
  );
}

export default Nav;