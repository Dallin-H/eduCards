import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

function Nav(props) {
  const { button1, button2, location1, location2, logout } = props;

  function onPress(buttonName) {
    if( buttonName === 'Logout' && logout ){
      logout()
    }
  }


  return (
    <div className="Nav__Container">
      <div className="logo">eduDecks</div>

      <div className="Menu">
        {button1 && (
          <Link to={location1}>
            <div
            onClick={e => onPress(button1)}
            > {button1} </div>
          </Link>
        )}
        {button2 && (
          <Link to={location2}>
            <div
            onClick={e => onPress(button2)}
            > {button2} </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
