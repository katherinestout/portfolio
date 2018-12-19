import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import PortfolioPeices from './components/PortfolioPeices';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {BrowserRouter, Route, Switch} from'react-router-dom';
import ProjectPlannerPage from './components/bigprojectpages/ProjectPlannerPage';
import DrinkeratorPage from './components/bigprojectpages/DrinkeratorPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Header/>
      <NavBar/>
      <About/>
      <Skills/>
      <PortfolioPeices/>
      <Contact/>
      <Footer/>

<Switch>
  
    <Route path ='/planner' component={ProjectPlannerPage}/>
    <Route path ='/drinkerator' component={DrinkeratorPage}/>
  </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
