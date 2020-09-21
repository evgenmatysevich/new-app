import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="item">
        <a href="/profile">Profile</a>
      </div>
      <div className="item">
        <a href="/dialogs">Messages</a>
      </div>
      <div className="item">
        <a href="/news">News</a>
      </div>
      <div className="item">
        <a href="/music">Music</a>
      </div>
      <div className="item">
        <a href="/setting">Settings</a>
      </div>
    </nav>
  );
};
export default Navbar;
