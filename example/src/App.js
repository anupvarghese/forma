import React, { Component } from 'react';
import SimpleForm from './SimpleForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello</h2>
        </div>
        <p className="App-intro">
          world
        </p>
        <SimpleForm />
      </div>
    );
  }
}

export default App;
