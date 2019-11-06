import React, { Component } from 'react';
import { connect } from 'react-redux';

//Containers
import MessagesContainer from '../containers/messagesContainer';



class MainChat extends Component {

  render(){
    return(
      <div className="chat">

      <div>
      {this.props.currentChannel ?
        <h2>
          {this.props.currentChannel.name}
        </h2>
        :
        "Please select a channel"
      }
        <button onClick={() => this.props.deleteChannel(this.props.currentChannel)}>delete</button>
      </div>

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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteChannel: (channel) => {
      dispatch({type: "REMOVE_CHANNEL", channel: channel})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainChat);
