import React, { Component } from 'react';


//Components
import MessageForm from '../components/messages/messageForm';



class MainChat extends Component {

  //Fetch Channels
  componentDidMount(){
    fetch('http://localhost:3000/channels')
    .then(response => response.json())
    .then(channels => console.log(channels))
  }


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
