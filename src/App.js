import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';

import recipes from './data/recipes';

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
