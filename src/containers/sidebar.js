import React, { Component } from 'react';
import { connect } from 'react-redux';

//Containers
import ChannelsContainer from '../containers/channelsContainer';

//Components
import Channel from '../components/channels/channel';
import ProfilePage from '../components/user_pages/profilePage';


class Sidebar extends Component {

  constructor(){
    super();
    this.state = {
      channels: []
    }
  }

  // //Fetch Channels
  // componentDidMount(){
  //   fetch('http://localhost:3000/channels')
  //   .then(response => response.json())
  //   .then(channels => this.props.setChannels(channels))
  // }



  render(){

    return(
      <div className="sidebar">
        
        <ChannelsContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setChannels: (channels) => {
//       dispatch({type: "SET_CHANNELS", channels: channels})
//     }
//   }
// }



export default connect(mapStateToProps, null)(Sidebar);
