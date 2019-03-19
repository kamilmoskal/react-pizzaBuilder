import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
    return (
      <CSSTransition 
        key={ing.id}
        classNames={{
          enter: classes['fade-enter'],
          enterActive: classes['fade-enter-active'],
          exit: classes['fade-exit'],
          exitActive: classes['fade-exit-active']
        }}
        timeout={300}
      >
        <PizzaIngredient type={ing.type}/>
      </CSSTransition>
    )
  })
  return (
    <div className={classes.Pizza}>
      <PizzaIngredient />
      <TransitionGroup>
        {Ingredients}
      </TransitionGroup>
    </div>
  )
}

export default Pizza;
