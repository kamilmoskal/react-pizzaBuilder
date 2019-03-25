import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './MakingPizza.module.scss';
import * as actions from '../../store/actions/index';

import Pizza from '../../components/Pizza/Pizza';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import PizzaControls from '../../components/Pizza/PizzaControls/PizzaControls';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-db';

class MakingPizza extends Component {
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
  componentDidMount() {
    this.props.onInitIngredients();
  }
  render() {
    let pizza = this.props.error ? 
    <p>Something went wrong: {this.props.error.message}</p> : <Spinner />;
    
    if (this.props.ingredients){
      pizza = (
        <React.Fragment>
          <PizzaControls 
            onChangeRange={this.props.onChangeIngredient}
            ingredients={this.props.ingredients}
            resetIng={this.props.onResetIngredients}
            randomPizza={this.props.onRandomPizza}/>
          <Pizza ingredients={this.props.ingredients}/>
          <OrderSummary 
            ingredients={this.props.ingredients}
            startedPrice={this.props.startedPrice}
            isAuth={this.props.isAuth}/>
        </React.Fragment>
      )
    }
    return (
      <div className={classes.MakingPizza}>
        {pizza}
      </div>
    )
  }
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