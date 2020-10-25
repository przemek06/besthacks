import React from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
      <nav id='nav'>
        <div className="nav-wrapper z-depth-2">
          <Link to="/" className="brand-logo">AtmosHere</Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
