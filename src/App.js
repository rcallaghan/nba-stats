import React, { Component } from 'react';
import './App.css';
import Logo from './logo.png'
import nba from 'nba'

import Search from './components/Search'

class App extends Component {
  constructor() {
    super()
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Logo} />
          <h1>NBA stats</h1>
        </header>
        <Search players={nba.players} />
      </div>
    );
  }
}

export default App;
