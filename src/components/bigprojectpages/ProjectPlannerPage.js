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
<h3>Problem to be solved</h3>
<h3>Persona</h3>
<h3>Mechanics</h3>
<h2>Design</h2>
<h2>Finished Product</h2>
<h3>How it works</h3>
</div>
      </div>
      </div>

    );
  }
}

export default ProjectPlannerPage;