import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux'

//Containers
import SideBar from '../../containers/sidebar';
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
    console.log("profile page props", this.props.user.user.username)

    return(
      <div className="profile">
        <h2 className="username">{`Welcome, ${this.props.user.user.username}!`}</h2>
        <SideBar />
        <MainChat />
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
