import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar';
import ItemList from './components/ItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <ItemList />
      </div>
    );
  }
}

export default App;
