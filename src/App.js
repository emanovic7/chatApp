import React, { Component } from 'react';
import './App.css';

//Containers
import Sidebar from './containers/sidebar';
import MainChat from './containers/mainChat';

class App extends Component {
  render(){
    return (
      <div className="container">
        <Sidebar />
        <MainChat />
      </div>
    );
  }
}


export default App;
