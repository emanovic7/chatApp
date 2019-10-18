import React, { Component } from 'react';


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
        user_id: 1,
        channel_id: 1
      })
    })
    .then(response => response.json())
    .then(message => this.setState({
        messages: [...this.state.messages, message]
    }))
  }


  

  render(){
    console.log(this.state)

    const messages = this.state.messages.map(message =>
      <Message key={message.id} message={message} />
    )

    return (
      <div>
        <h3>Messages</h3>
        <ul>{messages}</ul>
        <MessageForm addMessage={this.addNewMessage} />
      </div>
    )
  }
}


export default MessagesContainer;
