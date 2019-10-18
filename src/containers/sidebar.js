import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  //Change Channel
  changeChanel = (event) => {
    // console.log(event.target.innerText)
    this.props.setChannel(event.target.innerText)
  }

  render(){
    const channels = this.state.channels.map(channel =>
      <li onClick={this.changeChanel}>{channel.name}</li>
    )

    console.log("props from sidebar", this.props)

    return(
      <div>
        <h2>SideBar</h2>
        <ul>{channels}</ul>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setChannel: (channel) => {
      dispatch({type: "SET_CHANNEL", action: channel})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
