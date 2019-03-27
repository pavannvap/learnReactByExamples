import React, { Component } from 'react';
import TodoInputText from './components/TodoInputText'
import TodoList from './components/TodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInputText/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
