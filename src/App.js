import React, { Component } from 'react';
import ProfilePage from './components/user_pages/profilePage';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ProfilePage />
      </div>
    );
  }
}


export default App;
