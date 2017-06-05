import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, sendUserDetails } from './redux';
import SimpleForm from './SimpleForm';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>Hello</h2>
          </div>
          <p className="App-intro">
            world
          </p>
          <SimpleForm onSubmit={sendUserDetails} />
        </div>
      </Provider>
    );
  }
}

export default App;
