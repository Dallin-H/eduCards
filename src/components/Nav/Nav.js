import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav__Container">
      <div className="logo">eduCards</div>
      <div className="links">
        <div className="register">register</div>
        <div className="login">login</div>
      </div>
    </div>
  );
}

export default Nav;
