import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Upload from './upload';

class App extends Component {
  render() {
    return (
      <div className="App">

          <div className="App-header">
              <h2 id="headtext">faces2</h2>
          </div>

          <div>
              <Upload/>
          </div>

      </div>
    );
  }
}

export default App;
