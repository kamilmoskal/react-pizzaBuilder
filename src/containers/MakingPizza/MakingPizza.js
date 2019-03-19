import React, { Component } from 'react';
import classes from './MakingPizza.module.scss';

import Pizza from '../../components/Pizza/Pizza';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import PizzaControls from '../../components/Pizza/PizzaControls/PizzaControls';

const priceFor2gram = {
  onion: .10,
  salami: .12,
  mushrooms: .08,
  olives: .15,
  basil: .15,
  pineapple: .08,
  redPepper: .10,
  greenPepper: .10
}

class MakingPizza extends Component {
  state = {
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
  }
  addIngredientHandler = (value, type) => {
    this.setState({ 
        ingredients: {
          ...this.state.ingredients,
          [type]: {
            amount: value,
            price: value * priceFor2gram[type]
          }
        },
    });
  }
  resetHandler = () => {
    const resetState = this.resetState();
    this.setState({ ingredients: { ...resetState } })
  }
  resetState = () => {
    const resetState = {}
    for(let key in this.state.ingredients){
      resetState[key] = { amount: 0, price: 0 }
    }
    return resetState;
  }
  makeRandomPizzaHandler = () => {
    let ingredients = ['onion','salami','mushrooms','olives','basil','pineapple','redPepper','greenPepper'];
    const numberOfIngredients = Math.floor(Math.random()*7) + 1;
    let newIngredients={}

    for(let i=0; i<numberOfIngredients; i++){
      let randomAmount = Math.floor(Math.random()*20) + 5;
      let randomType = ingredients[Math.floor(Math.random()*ingredients.length)]

      newIngredients.ingredients = {
        ...newIngredients.ingredients,
        [randomType]: {
        amount: randomAmount,
        price: randomAmount * priceFor2gram[randomType]
      }}
      ingredients = ingredients.filter(ing => ing !== randomType);
    }
    console.log(numberOfIngredients)
    const resetState = this.resetState();
    this.setState({
      ingredients: {
        ...resetState,
        ...newIngredients.ingredients
      }
    })
  }
  render() {
    return (
      <div className={classes.MakingPizza}>
        <PizzaControls 
          onChangeRange={this.addIngredientHandler}
          ingredients={this.state.ingredients}
          resetIng={this.resetHandler}
          randomPizza={this.makeRandomPizzaHandler}/>
        <Pizza ingredients={this.state.ingredients}/>
        <OrderSummary ingredients={this.state.ingredients}/>
      </div>
    )
  }
}

export default MakingPizza;