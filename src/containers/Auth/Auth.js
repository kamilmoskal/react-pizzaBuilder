import React, { Component } from 'react';

import classes from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';
import Checkbox from '../../components/UI/Checkbox/Checkbox';

class Auth extends Component {
  render() {
    return (
      <div className={classes.Auth}>
        <h1 className={classes.Auth__title}>Log In</h1>
        <input 
            className={classes.Auth__email} 
            type="text" placeholder="email"/>
        <input 
            className={classes.Auth__password} 
            type="password" placeholder="password"/>
        <Checkbox>Remember me</Checkbox>
        <Button btnType='Primary'>Sign In</Button>
      </div>
    )
  }
}

export default Auth

