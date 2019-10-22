import React, { Component } from 'react';

//Containers
import MessagesContainer from '../containers/messagesContainer';



class MainChat extends Component {



  render(){
    return(
      <div className="container">
        I am the MainChat
        <MessagesContainer />
      </div>
    )
  }
}


export default MainChat;
