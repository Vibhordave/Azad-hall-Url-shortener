import React from "react";
import { LuLogIn } from "react-icons/lu";
function Navbar() {
  return (
    <div className="navbar">
      <div className="text-wrapper">Linkly</div>
      <div className="navbar-buttons">
        <button className="navbar-button" id="login">
          Login <LuLogIn />
        </button>
        <button className="navbar-button">Register Now</button>
      </div>
    </div>
  );
}

export default Navbar;
