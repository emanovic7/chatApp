import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux'

//Containers
import Sidebar from '../../containers/sidebar';
import MainChat from '../../containers/mainChat';



class ProfilePage extends Component {


  //Fetch User
    componentDidMount() {
      if (localStorage.token){
        fetch('http://localhost:3000/profile',{
          headers: {
            'Authorization': `Bearer ${localStorage.token}`
          }
        })
        .then(res => res.json())
        .then(user => this.props.setUser(user))

    }
    else {
      this.props.history.push('/')
    }
  }


  render(){

    return(
      <div className="profile">
        <div className="container">
          <Sidebar />
          <MainChat />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {
      dispatch({type: 'SET_USER', user: user})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
