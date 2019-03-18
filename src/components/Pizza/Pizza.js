import React from 'react';
import classes from './Pizza.module.scss';
import PizzaIngredient from '../PizzaIngredient/PizzaIngredient';

const Pizza = () => {
  return (
    <div className={classes.Pizza}>
      <PizzaIngredient />
      <PizzaIngredient type='onion'/>
      <PizzaIngredient type='onion'/>
      <PizzaIngredient type='onion'/>
      <PizzaIngredient type='onion'/>
      <PizzaIngredient type='mushrooms'/>
      <PizzaIngredient type='mushrooms'/>
      <PizzaIngredient type='mushrooms'/>
      <PizzaIngredient type='mushrooms'/>
      <PizzaIngredient type='mushrooms'/>
      <PizzaIngredient type='salami'/>
      <PizzaIngredient type='salami'/>
      <PizzaIngredient type='salami'/>
      <PizzaIngredient type='salami'/>
      <PizzaIngredient type='salami'/>
      <PizzaIngredient type='olives'/>
      <PizzaIngredient type='olives'/>
      <PizzaIngredient type='olives'/>
      <PizzaIngredient type='olives'/>
      <PizzaIngredient type='olives'/>
     
    </div>
  )
}

export default Pizza;
