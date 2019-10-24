import React, { Component } from 'react';
import { connect } from 'react-redux';



//Components
import MessageForm from '../components/messages/messageForm';
import Message from '../components/messages/message';

class MessagesContainer extends Component {

  constructor(){
    super()
    this.state = {
      messages: []
    }
  }

  //FETCH MESSAGES
  componentDidMount(){
    fetch('http://localhost:3000/messages')
    .then(response => response.json())
    .then(messages => this.setState({
      messages: messages
    }))
  }

  //NEW MESSAGE
  addNewMessage = (message) => {
    fetch('http://localhost:3000/messages', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: message,
        user_id: this.props.user.user.id,
        channel_id: 1
      })
    })
    .then(response => response.json())
    .then(message => this.setState({
        messages: [...this.state.messages, message]
    }))
  }




  render(){
    console.log("messages", this.props)
    const messages = this.state.messages.map((message, idx) =>
      <Message key={idx} message={message} />
    )

    return (
      <div className="chat">
        {messages}
        <MessageForm addMessage={this.addNewMessage} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user,
    currentChannel: state.channels.currentChannel
  }
}

export default connect(mapStateToProps, null)(MessagesContainer);
