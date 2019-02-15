import React from "react";
import Nav from "./../../Components/Nav/Nav";
import "./Landing.css";

function Landing() {
  return (
    <div className="Landing__Page">
      <Nav button1='Register' location1='/register' 
      button2='Login' location2='/login'
      />
      <div> LANDING PAGE</div>
    </div>
  );
}

export default Landing;
