import React, { Component } from 'react';

//Containers
import ChannelsContainer from '../containers/channelsContainer';
import MessagesContainer from '../containers/messagesContainer';



class MainChat extends Component {



  render(){
    return(
      <div>
        I am the MainChat
        <ChannelsContainer />
        <MessagesContainer />
      </div>
    )
  }
}


export default MainChat;
