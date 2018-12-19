import React, { Component } from 'react';
import './pages.css';
import ProjectPlannerLink from '../ProjectPlannerLink';


class ProjectPlannerPage extends Component {
  
  render() {
    return (

<div className="PlannerPage">

<ProjectPlannerLink/>

<h1>Project Planner Page</h1>
      </div>

    );
  }
}

export default ProjectPlannerPage;