import React, { Component } from 'react';
import "./style/header.css";

class Header extends Component {
  render() {
    return (
    <div className="Header">
    <div className="Main">
    <h1> <div className="Emphasis Hello">Hello! </div> 

      <div className="Name">
        I am Katherine Stout. 
        </div>
        
      </h1>

    <h2 className="Emphasis">Full Stack Developer</h2>
   
    </div>
      </div>
    );
  }
}

export default Header;