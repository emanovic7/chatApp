import React, { Component } from 'react';



class ChannelForm extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      img: ''
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
      name: '',
      img: ''
    })
  }

  render(){
    return(

      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>New Channel</h3>
          Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br />
          img: <input type="text" name="img" value={this.state.img} onChange={this.handleChange} />
          <input type="submit" value="submit"/>
        </form>
      </div>

    )
  }

}

export default ChannelForm;
