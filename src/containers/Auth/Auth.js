import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import classes from './Auth.module.scss';
import * as actions from '../../store/actions/index';

import Button from '../../components/UI/Button/Button';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Spinner from '../../components/UI/Spinner/Spinner';

class Auth extends Component {
  state = {
    signIn: true
  }
  signInHandle = () => {
    this.setState({  signIn: true })
  }
  signUpHandle = () => {
    this.setState({  signIn: false })
  }
  render() {
    if (this.props.ingSelected && this.props.isAuth){
      return <Redirect to="/checkout" />
    }
    if (this.props.isAuth){
      return <Redirect to="/" />
    }
    if (this.props.loading){
      return <Spinner />
    }
    return (
      <Formik
        initialValues={{ 
          email: '',
          password: '',
          remember: true
        }}
        onSubmit={(values, actions) => {
            this.props.onAuth(
              values.email, 
              values.password, 
              this.state.signIn, 
              values.remember
            )

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
            <p className={classes.login}>email:admin@admin.pl password:admin1234</p>
            {this.props.error ? <p className={classes.ErrorMsg}>authenticate error: {this.props.error.message.replace(/_/g, " ")}</p> : null}
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
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    ingSelected: state.mp.ingSelected
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email,password,signIn,remember) => dispatch(actions.auth(email,password,signIn,remember))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);