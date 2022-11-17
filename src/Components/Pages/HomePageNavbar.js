import React, { useState } from "react";
import "./HomePageNavbar.css";

function HomePageNavbar() {
  const [show, handleShow] = useState(false);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <button>Upgrade</button>
        <span className="login__logo"></span>
        <h3>Account Name</h3>
      </div>
    </div>
  );
}

export default HomePageNavbar;
