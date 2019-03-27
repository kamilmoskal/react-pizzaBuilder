import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './MakingPizza.module.scss';
import * as actions from '../../store/actions/index';

import Pizza from '../../components/Pizza/Pizza';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import PizzaControls from '../../components/Pizza/PizzaControls/PizzaControls';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-db';

const MakingPizza = props => {
  /* state = {
    ingredients: {
      onion: {amount: 0, price: 0},
      salami: {amount: 0, price: 0},
      mushrooms: {amount: 0, price: 0},
      olives: {amount: 0, price: 0},
      basil: {amount: 0, price: 0},
      pineapple: {amount: 0, price: 0},
      redPepper: {amount: 0, price: 0},
      greenPepper: {amount: 0, price: 0},
    }
  } */
  useEffect(() => {
    props.onInitIngredients();
  }, []);
 
  let pizza = props.error ? 
  <p>Something went wrong: {props.error.message}</p> : <Spinner />;
  
  if (props.ingredients){
    pizza = (
      <React.Fragment>
        <PizzaControls 
          onChangeRange={props.onChangeIngredient}
          ingredients={props.ingredients}
          resetIng={props.onResetIngredients}
          randomPizza={props.onRandomPizza}/>
        <Pizza ingredients={props.ingredients}/>
        <OrderSummary 
          ingredients={props.ingredients}
          startedPrice={props.startedPrice}
          isAuth={props.isAuth}/>
      </React.Fragment>
    )
  }
  return (
    <div className={classes.MakingPizza}>
      {pizza}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ingredients: state.mp.ingredients,
    startedPrice: state.mp.startedPrice,
    error: state.mp.error,
    isAuth: state.auth.token !== null
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onChangeIngredient: (value, type) => dispatch(actions.changeIngredient(value, type)),
    onResetIngredients: () => dispatch(actions.resetIngredients()),
    onRandomPizza: () => dispatch(actions.randomPizza())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(MakingPizza, axios));