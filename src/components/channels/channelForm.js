import React, { Component } from 'react';



class ChannelForm extends Component {

  constructor(){
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addChannel(this.state)
    this.setState({
      name: ''
    })
  }

  render(){
    return(

      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="add channel"/>
          <button type="submit">+</button>
        </form>
      </div>

    )
  }

}

export default ChannelForm;
