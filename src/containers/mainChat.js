import React, { Component } from 'react';
import { connect } from 'react-redux';

//Containers
import MessagesContainer from '../containers/messagesContainer';



class MainChat extends Component {

  render(){
    return(
      <div className="chat">
      <h2>{this.props.currentChannel.name}</h2>
        <MessagesContainer />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    channels: state.channels,
    currentChannel: state.channels.currentChannel
  }
}

export default connect(mapStateToProps, null)(MainChat);
