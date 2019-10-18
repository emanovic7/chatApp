import React, { Component } from 'react';




class MessageForm extends Component {

  constructor(){
    super();
    this.state = {
      message: '',
      user_id: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitMessage = (event) => {
    event.preventDefault()
    this.props.addMessage(this.state.message)
    this.setState({
      message: ''
    })
  }



  render(){
    return(
      <div>
        I am the MessageForm
        <form onSubmit={this.submitMessage}>
          <input type="text" name="message" value={this.state.message} onChange={this.handleChange} />
          <input type="submit" value="chat" />
        </form>
      </div>
    )
  }
}


export default MessageForm;
