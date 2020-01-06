import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';


const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 3
  },
  item: {
    padding: theme.spacing.unit * 2
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  }
});


class HomePage extends Component {

  render(){
    const { classes } = this.props;



    return(
      <div>
        <h3>Welcome to ChatApp</h3>

        <Grid container direction="row">
          <Grid item >
            Login
          </Grid>

          <Grid item>
            SignUp
          </Grid>

        </Grid>

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
