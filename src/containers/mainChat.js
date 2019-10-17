import React, { Component } from 'react';


//Components
import MessageForm from '../components/messages/messageForm';



class MainChat extends Component {
  render(){
    return(
      <div>
        I am the MainChat
        <MessageForm />
      </div>
    )
  }
}


export default MainChat;
