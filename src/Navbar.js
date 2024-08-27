import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="mainnavdiv" style={{zIndex:"1"}}>
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/fashion" className="nav-link">FASHION</Link>
        </li>
        <li className='dot'>•</li>
        <li className="nav-item">
          <Link to="/beauty" className="nav-link"> BEAUTY</Link>
        </li>
        <li className='dot'>•</li>
        <li className="nav-item">
          <Link to="/food" className="nav-link">FOOD</Link>
        </li>
        <li className='dot'>•</li>
        <li className="nav-item">
          <Link to="/Travel" className="nav-link">TRAVEL</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
