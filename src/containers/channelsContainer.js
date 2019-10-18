import React, { Component } from 'react';

//Components
import Channel from '../components/channels/Channel';


class ChannelContainer extends Component {

  constructor(){
    super();
    this.state = {
      channels: []
    }
  }

  //Fetch Channels
  componentDidMount(){
    fetch('http://localhost:3000/channels/1')
    .then(response => response.json())
    .then(channels => this.setState({
      channels
    }))
  }

  render(){
    const allChannels = this.state.channels.map(channel =>
      <Channel key={channel.id} channel={channel} />
    )


    return(
      <div>
        <h3>Current Channel</h3>
        {allChannels}
      </div>
    )
  }
}


export default ChannelContainer;
