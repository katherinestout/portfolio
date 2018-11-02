import React, { Component } from 'react';
import "./style/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
      <nav className="navbar navbar-expand-lg bg">
      <ul className="navbar-nav">
      <li className="nav-item">
      About Me
      </li>
      <li className="nav-item">
      Skills
      </li>
      <li className="nav-item">
      Portfolio
      </li>
      <li className="nav-item">
      Experience
      </li>
      </ul>

      </nav>
      </div>
    );
  }
}

export default NavBar;
