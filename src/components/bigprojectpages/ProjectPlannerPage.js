import React, { Component } from 'react';
import './pages.css';
import ProjectLinks from './ProjectLinks';

class ProjectPlannerPage extends Component {
  render() {
    return (

<div>

<ProjectLinks/>
<div className="page">
<h1>ProjectPlanner </h1>

<div className="projectContent">
<h2>Planning</h2>
<div className="content"></div>
<h3>Problem to be solved</h3>
<div className="content"></div>
<h3>Persona</h3>
<div className="content"></div>
<h3>Mechanics</h3>
<div className="content"></div>
<h2>Design</h2>
<div className="content">
<p>Design Elements:
  <ol>
    <li>Simple</li>
    <li>Easy to navigate</li>
    <li>Interactive</li>

  </ol>
</p>

<p>Built with:
  <ol>
    <li>Materialize [Front End]</li>
    <li>CSS</li>
  </ol>
</p>
</div>

<h2>Finished Product</h2>
<div className="content">
<p>
  Dependencies:
  <ol>
    <li>Firebase [Back End]</li>
    <li>Moment.js</li>
    <li>React.js</li>
    <li>React-dom</li>
    <li>React-redux</li>
    <li>React-redux-firebase</li>
    <li>React-router-dom</li>
    <li>React-scripts</li>
    <li>Redux</li>
    <li>Redux-firestore</li>
    <li>redux-thunk</li>
  </ol>
</p>

</div>

<h3>How it works</h3>
<div className="content"></div>
</div>
      </div>
      </div>

    );
  }
}

export default ProjectPlannerPage;