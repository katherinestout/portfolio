import React, { Component } from 'react';
import "./style/skills.css";



class Skills extends Component {
  render() {
    return (
      <div className="Skills" id="skills">
      <h2>Skills</h2>
      <hr/>

    <ul>
      <li>HTML </li>
      <li> CSS </li>
      <li> Bootstrap</li>
      <li>SASS </li>
      <li> Javascript</li>
      <li> jQuery</li>
      <li> Git </li>
       </ul>
       <ul>
      <li>Heroku </li>
      <li> API's and AJAX</li>
      <li> Node.js </li>
      <li> React.js </li>
      <li>Redux </li>
      <li> Materialize.css</li>
      <li> Moment.js </li>
      </ul>
      <ul>
      <li> Photoshop </li>
      <li> Graphic Design </li>
      <li> Photography </li>
      <li>  Communications Law</li>
      <li> Firebase </li>
      <li> MongoDB</li>
      <li>  Express</li>
    </ul>
      </div>
    );
  }
}

export default Skills;