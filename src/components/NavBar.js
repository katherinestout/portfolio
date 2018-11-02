import React, { Component } from 'react';
import "./style/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
      <nav className="navbar navbar-expand-lg bg navbar-collapse ml-auto">
      <ul className="navbar-nav">
      <li className="nav-item">
      <a href="#about">
      ABOUT 
      </a>
      </li>
      <li className="nav-item">
      <a href="#skills">
      SKILLS
      </a>
      </li>
      <li className="nav-item">
      <a href="#portfolio">
      PORTFOLIO</a>
      </li>
      <li className="nav-item">
      <a href="#experience">
      EXPERIENCE
      </a>
      </li>
      </ul>

      </nav>
      </div>
    );
  }
}

export default NavBar;
