import React, { Component } from 'react';




class ChannelContainer extends Component {

  //Fetch Channels
  componentDidMount(){
    fetch('http://localhost:3000/channels')
    .then(response => response.json())
    .then(channels => console.log(channels))
  }

  render(){
    return(
      <div>
        I am the ChannelContainer
      </div>
    )
  }
}


export default ChannelContainer;
