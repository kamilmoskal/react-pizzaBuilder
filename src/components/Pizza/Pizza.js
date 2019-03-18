import React from 'react';
import classes from './Pizza.module.scss';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const Pizza = ({ingredients}) => {
  
  let ingredientsArray = []
  for(let key in ingredients){
    for(let i=0; i<ingredients[key].amount; i++){
      ingredientsArray.push({id: key + i, type: key})
    }
  }
  let Ingredients = ingredientsArray.map(ing => {
    return <PizzaIngredient key={ing.id} type={ing.type}/>
  })
  return (
    <div className={classes.Pizza}>
      <PizzaIngredient />
      {Ingredients}
    </div>
  )
}

export default Pizza;
