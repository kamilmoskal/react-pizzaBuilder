import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import classes from './Auth.module.scss';
import * as actions from '../../store/actions/index';

import Button from '../../components/UI/Button/Button';
import Checkbox from '../../components/UI/Checkbox/Checkbox';

class Auth extends Component {
  state = {
    currentSubmit: 'signIn'
  }
  signInHandle = () => {
    this.setState({ currentSubmit: 'signIn' })
  }
  signUpHandle = () => {
    this.setState({ currentSubmit: 'signUp' })
  }
  render() {
    return (
      <Formik
        initialValues={{ 
          email: '',
          password: '',
          remember: true
        }}
        onSubmit={(values, actions) => {

            console.log(values)
            console.log(actions)
        
        }}
        validate={(values) => {
          let errors = {}

          if(!values.email){
            errors.email = "Email Required"
          } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address (xxx@xxx.xx)';
          }

          if(!values.password){
            errors.password = "Password Required"
          } else if (values.password.length < 6) {
            errors.password = 'Minimum 6 characters'
          }

          return errors
        }}
        render={({
          values,
          handleChange,
          handleSubmit
        }) => (
          <Form onSubmit={handleSubmit} className={classes.Auth}>
            <h1 className={classes.Auth__title}>Log In</h1>
            <Field 
                className={classes.Auth__email} 
                type="email"
                name="email"
                placeholder="email"/>
            <ErrorMessage name="email" component="div" className={classes.ErrorMsg}/>
            <Field 
                className={classes.Auth__password} 
                type="password" 
                name="password"
                placeholder="password"/>
            <ErrorMessage name="password" component="div" className={classes.ErrorMsg}/>
            <Checkbox 
              name='remember' 
              checked={values.remember}
              onChange={handleChange}>
              Remember me</Checkbox>
            <div style={{display: 'flex'}}>
              <Button btnType='Primary' clicked={this.signInHandle}>Sign In</Button>
              <Button btnType='Primary' clicked={this.signUpHandle}>Sign Up</Button>
            </div>
          </Form>
        )}
      />
      
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (data) => dispatch(actions)
  }
}

export default connect()(Auth);