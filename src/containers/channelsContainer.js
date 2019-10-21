import React, { Component } from 'react';
import { connect } from 'react-redux'

//Components
import Channel from '../components/channels/channel';
import ChannelForm from '../components/channels/channelForm';

class ChannelContainer extends Component {

  constructor(){
    super();
    this.state = {
      channels: []
    }
  }

  //AddNewChannel
  AddNewChannel = (channel) => {
    fetch('http://localhost:3000/channels', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: channel.name,
        img: channel.img
      })
    })
    .then(response => response.json())
    .then(channel => this.props.addChannel(channel))
  }



  render(){
    // const allChannels = this.state.channels.map(channel =>
    //   <Channel key={channel.id} channel={channel} />
    // )
    console.log(this.props.channels)

    return(
      <div>
        <h3>Current Channel</h3>

        <ChannelForm addChannel={(channel) => this.AddNewChannel(channel)}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return{
    channels: store.channels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setChannel: (channel) => {
      dispatch({type: "SET_CHANNEL", action: channel})
    },

    addChannel: (channel) => {
      dispatch({type: "ADD_CHANNEL", action: channel})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelContainer);
