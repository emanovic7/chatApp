import React, { Component } from 'react';




class HomePage extends Component {

  render(){
    return(
      <div>
        <h3>Welcome to ChatApp</h3>
      </div>
    )
  }

}
export default HomePage;



// <h1>Welcome to ChatApp</h1>
// <h3>Login</h3>
// <form onSubmit={this.handleLogin}>
//   <label>username</label>
//   <input type="text" name="username" value={this.state.username} onChange={this.handleLoginChange}/><br />
//   <label>password</label>
//   <input type="password" name="password" value={this.state.password} onChange={this.handleLoginChange}/><br />
//   <input type="submit" value="submit"/>
// </form>
