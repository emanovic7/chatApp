import React, { Component } from 'react';

//Components
import Channel from '../components/channels/channel';


class Sidebar extends Component {

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
  }

  render(){
    const channels = this.state.channels.map(channel =>
      <Channel channel={channel}/>
    )

    return(
      <div>
        <h2>SideBar</h2>
        <ul>{channels}</ul>
      </div>
    )
  }
}


export default Sidebar;
