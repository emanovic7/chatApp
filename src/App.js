import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';


//Components
import ProfilePage from './components/user_pages/profilePage';
import HomePage from './components/user_pages/homepage';
import SignUp from './components/user_pages/signUp';
import Login from './components/user_pages/login';
import FourOhFour from './components/user_pages/fourOhFour';


//Containers
import Sidebar from './containers/sidebar';
import MainChat from './containers/mainChat';

class App extends Component {
  render(){
    return (
      <Switch>

        <Route path={'/profile'} component={ProfilePage}/>
        <Route path={'/signup'} component={SignUp} />
        <Route path={'/login'} component={Login} />
        {/*<div className="container">
          <Sidebar />
          <MainChat />
        </div>*/}
        <Route path={'/'} component={HomePage} />
        <Route component={FourOhFour} />
      </Switch>
    );
  }
}

export default withRouter(App);
