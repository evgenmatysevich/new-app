import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return <nav className='nav'>
  <div className='item'>Profile</div>
  <div className='item'><a href="">Messages</a></div>
  <div className='item'><a href="">News</a></div>
  <div className='item'><a href="">Music</a></div>
  <div className='item'><a href="https://www.ukr.net/">Books</a></div>
  <div className='item'><a href="">Settings</a></div>
  </nav>
}
export default Navbar;
