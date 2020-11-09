import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="item">
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className="item">
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className="item">
        <NavLink to="/pokemon">Pokemon</NavLink>
      </div>
      <div className="item">
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className="item">
        <NavLink to="/weather_app">Weather</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
