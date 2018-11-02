import React, { Component } from 'react';
import  "./style/portfolio.css";
import clevercap from "./screenshots/clevercap.png";
import crystal from "./screenshots/crystal.png";
import drinkerator from "./screenshots/drinkerator.png";
import todo from "./screenshots/todolist.png";

class PortfolioPeices extends Component {
  render() {
    return (
      <div className="Portfolio">
      <h2> Portfolio Projects  </h2> <hr/>
     

      <div className="projects">
        <img src={clevercap} alt="clevercap" className="screenshots" ></img>
        <img src={crystal} alt="crystal" className="screenshots" ></img>
        <img src={drinkerator} alt="drinkerator" className="screenshots" ></img>
        <img src={todo} alt="todo" className="screenshots" ></img>
      </div>
      </div>
    );
  }
}

export default PortfolioPeices;