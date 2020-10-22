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
        <NavLink to="/news">News</NavLink>
      </div>
      <div className="item">
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className="item">
        <NavLink to="/seting">Seting</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
