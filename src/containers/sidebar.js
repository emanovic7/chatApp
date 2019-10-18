import React, { Component } from 'react';




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
    return(
      <div>
        I am the Sidebar
      </div>
    )
  }
}


export default Sidebar;
