import React, { Component } from 'react';

//Containers
import ChannelsContainer from '../containers/channelsContainer';

//Components
import MessageForm from '../components/messages/messageForm';



class MainChat extends Component {



  render(){
    return(
      <div>
        I am the MainChat
        <ChannelsContainer />
        <MessageForm />
      </div>
    )
  }
}


export default MainChat;
