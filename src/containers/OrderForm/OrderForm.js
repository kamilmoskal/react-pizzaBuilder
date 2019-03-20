import React, { Component } from 'react';
import classes from './OrderForm.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '../../components/UI/Button/Button';

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
          console.log(values)
          console.log(actions)
          {/*  setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000); */}
        }}
        validate={(values) => {
          let errors = {}

          if(!values.name){
            errors.name = "Required"
          } else if (values.name.length < 3) {
            errors.name = 'Minimum 3 characters'
          }

          if(!values.street){
            errors.street = "Required"
          }

          if(!values.zipCode){
            errors.zipCode = "Required"
          }

          if(!values.country){
            errors.country = "Required"
          }

          if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address (xxx@xxx.xx)';
          }

          if(!values.phone){
            errors.phone = "Required"
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
              type="number"
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
              disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      />
    )
  }
}

export default OrderForm;