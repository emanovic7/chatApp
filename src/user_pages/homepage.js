import React, { Component } from 'react';




class HomePage extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = () => {

  }

  render(){
    return(
      <div>
        <h1>Welcome to ChatApp</h1>
        <h3>Login</h3>
        <form onSubmit={this.handleLogin}>
          <label>username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br />
          <label>password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br />
          <input type="submit" value="submit"/>
        </form>

        <h2>OR</h2>

        <h3>SignUp</h3>
        <form onSubmit={this.handleSignUp}>
          <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br />
          <label>username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br />
          <label>password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br />
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }

}


export default HomePage;
