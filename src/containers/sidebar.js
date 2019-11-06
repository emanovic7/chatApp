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

  handleLogout = () => {
    localStorage.clear()
    this.props.history.push('/login')
  }

  render(){
    
    return(
      <div className="sidebar">
      {this.props.user.user.username ?
        <div>
          <button onClick={this.handleLogout}>Logout</button>
          <h2 className="">{`hola, ${this.props.user.user.username}!`}</h2>
        </div>
        :
        <h1>getting your info...</h1>
      }
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
