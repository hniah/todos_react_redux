import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
import Reddit from './containers/Reddit';

class App extends Component {
  handleRefreshClick(e){
    e.preventDefault()
    console.log('Testing');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Redux</h2>
        </div>
        <div>
          <TodoApp />
        </div>
        <div>
          <Reddit />
        </div>
      </div>
    );
  }
}

export default App;
