import React from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">AtmosHere</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
