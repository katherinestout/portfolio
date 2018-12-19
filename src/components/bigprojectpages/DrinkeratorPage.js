import React, { Component } from 'react';
import PagesNav from './PagesNav';
import {  Route, BrowserRouter } from 'react-router-dom';
import './projectpages.css';
import App from './../../App';


//<Route exact path ='/' component={App}/>

class DrinkeratorPage extends Component {
  
  render() {
    
    return (

<BrowserRouter>
<div className="DrinkeratorPage">
<PagesNav/>

<Route exact path ='/' component={App}/>


<h1>Hi</h1>
      </div>

</BrowserRouter>
    );
  }
}

export default DrinkeratorPage;