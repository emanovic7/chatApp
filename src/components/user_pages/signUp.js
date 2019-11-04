import React, { Component } from 'react';


class SignUp extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      username: '',
      password: '',
      img: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //REGISTER USER
  handleSignUp = (e) => {
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
  // .then(data => {
  //   if (data.token) {
  //     localStorage.token = data.token
  //
  //     this.props.history.push('/profile')
  //     // this.props.redirect('profile')
  //
  //   }
  // })
  .then(data => console.log(data))
}

  render(){
    return(
      <div>
        <h3>SignUp</h3>
        <form onSubmit={this.handleSignUp}>
          <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br />
          <label>username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br />
          <label>password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br />
          <label>Image</label>
            <input type="text" name="img" value={this.state.img} onChange={this.handleChange}/><br />
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }

}


export default SignUp;
