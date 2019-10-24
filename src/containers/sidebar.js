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



  render(){

    return(
      <div className="sidebar">
        <ProfilePage />
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


export default connect(mapStateToProps, null)(Sidebar);
