import React, { Component } from 'react';
import Pizza from '../../components/Pizza/Pizza';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import PizzaControls from '../../components/Pizza/PizzaControls/PizzaControls';

const priceFor2gram = {
  onion: .10,
  salami: .12,
  mushrooms: .8,
  olives: .15,
  basil: .15,
  pineapple: .8,
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
    this.setState({
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
    })
  }
  makeRandomPizzaHandler = () => {
    let ingredients = ['onion','salami','mushrooms','olives','basil','pineapple','redPepper','greenPepper'];
    const numberOfIngredients = Math.floor(Math.random()*6) + 1;
    let newIngredients={}

    for(let i=0; i<numberOfIngredients; i++){
      let randomAmount = Math.floor(Math.random()*50);
      let randomIng = ingredients[Math.floor(Math.random()*ingredients.length)]

      newIngredients.ingredients = {
        ...newIngredients.ingredients,
        [randomIng]: {
        amount: randomAmount,
        price: randomAmount * priceFor2gram[randomIng]
      }}
      ingredients = ingredients.filter(ing => ing !== randomIng);
    }
    console.log(numberOfIngredients)

    this.setState({
      ingredients: {
        onion: {amount: 0, price: 0},
        salami: {amount: 0, price: 0},
        mushrooms: {amount: 0, price: 0},
        olives: {amount: 0, price: 0},
        basil: {amount: 0, price: 0},
        pineapple: {amount: 0, price: 0},
        redPepper: {amount: 0, price: 0},
        greenPepper: {amount: 0, price: 0},
        ...newIngredients.ingredients
      }
    })
  }
  render() {
    return (
      <div>
        <PizzaControls 
          onChangeRange={this.addIngredientHandler}
          ingredients={this.state.ingredients}
          resetIng={this.resetHandler}
          randomPizza={this.makeRandomPizzaHandler}/>
        <Pizza ingredients={this.state.ingredients}/>
        <OrderSummary />
      </div>
    )
  }
}

export default MakingPizza;