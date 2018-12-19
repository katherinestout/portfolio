import React, { Component } from 'react';
import './pages.css';
import ProjectPlannerLink from '../ProjectPlannerLink';


//<Route exact path ='/' component={App}/>

class DrinkeratorPage extends Component {
  
  render() {
    
    return (


<div className="DrinkeratorPage">
<ProjectPlannerLink/>

<h1>Drinkerator Page</h1>
      </div>


    );
  }
}

export default DrinkeratorPage;