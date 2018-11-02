import React, { Component } from 'react';
import "./style/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
      <nav className="navbar navbar-expand-lg bg">
      <ul className="navbar-nav">
      <li className="nav-item">
      <a href="#about">
      About Me
      </a>
      </li>
      <li className="nav-item">
      <a href="#skills">
      Skills
      </a>
      </li>
      <li className="nav-item">
      <a href="#portfolio">
      Portfolio</a>
      </li>
      <li className="nav-item">
      <a href="#experience">
      Experience
      </a>
      </li>
      </ul>

      </nav>
      </div>
    );
  }
}

export default NavBar;
