import React, { Component } from 'react';
import { connect } from 'react-redux'

//Components
import Channel from '../components/channels/channel';


class ChannelContainer extends Component {

  constructor(){
    super();
    this.state = {
      channel: ''
    }
  }



  render(){
    // const allChannels = this.state.channels.map(channel =>
    //   <Channel key={channel.id} channel={channel} />
    // )


    return(
      <div>
        <h3>Current Channel</h3>
        <Channel channel={this.state.channel}/>
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
