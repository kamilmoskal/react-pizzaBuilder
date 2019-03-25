import React, { Component } from 'react';
import classes from './OrderForm.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Button from '../../../components/UI/Button/Button';

class OrderForm extends Component {
  render() {
    return (
      <Formik
        className={classes.OrderForm}
        initialValues={{ 
          name: '',
          street: '',
          zipCode: '',
          country: '',
          email: '',
          phone: '',
          deliveryMethod: 'cheapest'
        }}
        onSubmit={(values, actions) => {
          let totalPrice = this.props.startedPrice;
          for(let key in this.props.ingredients){
              totalPrice += this.props.ingredients[key].price
          }

          const orderData = {
            ingredients: this.props.ingredients,
            orderData: values,
            userId: this.props.userId,
            totalPrice: totalPrice.toFixed(2)
          }
          this.props.onSubmitOrder(this.props.token, orderData)
        }}
        validate={(values) => {
          let errors = {}

          if(!values.name){
            errors.name = "Name is required"
          } else if (values.name.length < 3) {
            errors.name = 'Minimum 3 characters'
          }

          if(!values.street){
            errors.street = "Street is required"
          }

          if(!values.zipCode){
            errors.zipCode = "Zipcode is required"
          }

          if(!values.country){
            errors.country = "Country is required"
          }

          if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address (xxx@xxx.xx)';
          }

          if(!values.phone){
            errors.phone = "Phone is required"
          } else if ( isNaN(values.phone) ) {
            errors.phone = 'Phone must be write in digits'
          } else if (values.phone.length < 7) {
            errors.phone = 'Minimum 7 digits'
          }
          
          return errors
        }}
        render={({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          isValidating
        }) => (
          <Form onSubmit={handleSubmit} className={classes.OrderForm}>
            <input
              className={classes.Field}
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
              placeholder="name*"
            />
            {errors.name && touched.name && 
            <div className={classes.ErrorMsg}>{errors.name}</div>}
            <Field
              className={classes.Field}
              type="text"
              name="street"
              placeholder="street*"
            />
            <ErrorMessage name="street" component="div" className={classes.ErrorMsg}/>
            <Field
              className={classes.Field}
              type="text"
              name="zipCode"
              placeholder="zipCode*"
            />
            <ErrorMessage name="zipCode" component="div" className={classes.ErrorMsg}/>
            <Field
              className={classes.Field}
              type="text"
              name="country"
              placeholder="country*"
            />
            <ErrorMessage name="country" component="div" className={classes.ErrorMsg}/>
            <Field
              className={classes.Field}
              type="email"
              name="email"
              placeholder="email"
            />
            <ErrorMessage name="email" component="div" className={classes.ErrorMsg}/>
            <Field
              className={classes.Field}
              type="text"
              name="phone"
              placeholder="phone*"
            />
            <ErrorMessage name="phone" component="div" className={classes.ErrorMsg}/>
            <Field
              className={classes.Field}
              component="select"
              name="deliveryMethod">
              <option value="cheapest">Cheapest</option>
              <option value="fastest">Fastest</option>
            </Field>
            <ErrorMessage name="deliveryMethod" component="div" className={classes.ErrorMsg}/>
            
            <Button 
              btnType="Primary"
              //disabled={isSubmitting}
              >
              Submit
            </Button>
          </Form>
        )}
      />
    )
  }
}
const mapStateToProps = state => {
  return {
    ingredients: state.mp.ingredients,
    startedPrice: state.mp.startedPrice,
    token: state.auth.token,
    userId: state.auth.userId
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSubmitOrder: (token, order) => dispatch(actions.submitOrder(token, order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);