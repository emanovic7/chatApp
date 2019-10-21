import React, { Component } from 'react';
import { connect } from 'react-redux'

//Components
import Channel from '../components/channels/channel';
import ChannelForm from '../components/channels/channelForm';

class ChannelContainer extends Component {

  constructor(){
    super();
    this.state = {
      channel: ''
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
    .then(channel => console.log(channel))
  }



  render(){
    // const allChannels = this.state.channels.map(channel =>
    //   <Channel key={channel.id} channel={channel} />
    // )


    return(
      <div>
        <h3>Current Channel</h3>
        <Channel channel={this.state.channel} />
        <ChannelForm addChannel={(channel) => this.AddNewChannel(channel)}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return{
    channel: store.channel
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setChannel: (channel) => {
      dispatch({type: "SET_CHANNEL", action: channel})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelContainer);
