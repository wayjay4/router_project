import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){
  return (
    <nav className="navigation-bar">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/"><li className="nav_link">Home</li></Link>
        <Link to="/about"><li className="nav_link">About</li></Link>
        <Link to="/shop"><li className="nav_link">Shop</li></Link>
      </ul>
    </nav>
  );
}

export default Navigation;
