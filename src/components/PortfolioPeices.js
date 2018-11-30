import React, { Component } from 'react';
import  "./style/portfolio.css";
import clevercap from "./screenshots/clevercap.png";
import crystal from "./screenshots/crystal.png";
import drinkerator from "./screenshots/drinkerator.png";
import todo from "./screenshots/todolist.png";
import wordguess from "./screenshots/wordguess.png";
import projectPlanner from "./screenshots/ProjectPlanner.png";

class PortfolioPeices extends Component {
  render() {
    return (
      <div className="Portfolio" id="portfolio">
      <h2> Portfolio Projects  </h2> <hr/>
     

      <div className="projects">

        <img src={clevercap} alt="clevercap" className="screenshots" ></img>

        <a href="https://katherinestout.github.io/crystalgame/">
        <img src={crystal} alt="crystal" className="screenshots" ></img>
        </a>

        <a href="https://katherinestout.github.io/Drinkerator/" >
        <img src={drinkerator} alt="drinkerator" className="screenshots"></img>
        </a>

        <a href="https://katherinestout.github.io/Todo_Redux/">
        <img src={todo} alt="todo" className="screenshots" ></img>
        </a>

        <a href ="https://katherinestout.github.io/PoliticsGame/">
        <img src={wordguess} alt="wordguess" className="screenshots"></img>
        </a>

          <a href ="https://katprojectplan.firebaseapp.com/signin ">
        <img src={projectPlanner} alt="projectPlanner" className="screenshots"></img>
        </a>




      </div>
      </div>
    );
  }
}

export default PortfolioPeices;