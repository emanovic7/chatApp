import React, { Component } from 'react';


class Login extends Component {

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

//Log User In
  handleLogin = (e) => {
  e.preventDefault()
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.state)
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      localStorage.token = data.token

      this.props.history.push('/profile')
      // this.props.redirect('profile')

    }
  })
}


  render(){
    return(
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleLogin}>
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


export default Login;
