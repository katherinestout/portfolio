import React, { Component } from 'react';
import PagesNav from './PagesNav';
import {  Route, BrowserRouter } from 'react-router-dom';
import './projectpages.css';
import App from './../../App';


//<Route exact path ='/' component={App}/>

class ProjectPlannerPage extends Component {
  
  render() {
    
    return (

<BrowserRouter>
<div className="ProjectPlannerPage">
<PagesNav/>

<Route exact path ='/' component={App}/>


<h1>Hi</h1>
      </div>

      </BrowserRouter>
    );
  }
}

export default ProjectPlannerPage;