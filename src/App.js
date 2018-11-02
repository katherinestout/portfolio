import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import PortfolioPeices from './components/PortfolioPeices';
import Skills from './components/Skills';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Header/>
      <NavBar/>
      <About/>
      <Skills/>
      <PortfolioPeices/>
      <Footer/>
      </div>
    );
  }
}

export default App;
