import React, { Component } from 'react';
import { connect } from 'react-redux';

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


    //Fetch Channels
    componentDidMount(){
      fetch('http://localhost:3000/channels')
      .then(response => response.json())
      .then(channels => this.setState({
        channels
      }))
      // .then(channels => this.props.setChannels(channels))
      // debugger
      // //.then(channels => this.props.setChannel(channels[0]))
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
        name: channel.name
      })
    })
    .then(response => response.json())
    //.then(channel => this.props.addChannel(channel))
    .then(channel => this.setState({
        channels: [...this.state.channels, channel]
    }))
  }

  //Delete Channel
  deleteChannel = (channel) => {
    console.log(channel)
  }



  render(){

    console.log("channels props", this.props)

    const channelsList = this.state.channels.map((channel, idx) =>
      <li key={idx}
        onClick={() => this.props.setChannel(channel)}>
        {channel.name}
      </li>

    )

    return(
      <div>
        <h4 style={{marginBottom: 5}}>Channels</h4>
        <ChannelForm addChannel={(channel) => this.AddNewChannel(channel)}/>
        <ul>{channelsList}</ul>
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
    setChannels: (channels) => {
      debugger
      dispatch({type: "SET_CHANNELS", channels: channels})
    },

    setChannel: (channel) => {
      dispatch({type: "SET_CHANNEL", channel: channel})
    },

    addChannel: (channel) => {
      dispatch({type: "ADD_CHANNEL", channel: channel})
    },

    removeChannel: (channel) => {
      dispatch({type: "REMOVE_CHANNEL", channel: channel})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelContainer);
