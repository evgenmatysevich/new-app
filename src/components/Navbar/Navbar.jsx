import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return <nav className='nav'>
  <div className='item'>Profile</div>
  <div className='item'><a>Messages</a></div>
  <div className='item'><a>News</a></div>
  <div className='item'><a>Music</a></div>
  <div className='item'><a>Books</a></div>
  <div className='item'><a>Settings</a></div>
  </nav>
}
export default Navbar;
