import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import PortfolioPeices from './components/PortfolioPeices';
//import Skills from './components/Skills';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Header/>
      <About/>
      <PortfolioPeices/>
      <Footer/>
      </div>
    );
  }
}

export default App;
