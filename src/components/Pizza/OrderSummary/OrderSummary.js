import React from 'react';
import classes from './OrderSummary.module.scss';
import Button from '../../UI/Button/Button';

const OrderSummary = ({ingredients}) => {

  const ingredientsArray = []
  for(let key in ingredients){
      ingredientsArray.push({type: key, amount: ingredients[key].amount, price: ingredients[key].price})
  }
  let mappedIng = ingredientsArray.filter(ing => ing.amount !== 0).map(ing => {
    return <p key={ing.type}
              className={classes.ingredient}>
            <strong>{ing.type}:</strong> {ing.amount*2} g,<strong>${ing.price.toFixed(2)}</strong>
          </p>
  })
  let totalPrice = 14;
  ingredientsArray.forEach(ing => totalPrice += ing.price)
  if (mappedIng.length === 0){
    mappedIng = <p style={{textAlign: 'center'}}>ADD INGREDIENTS</p>
  }
  return (
    <div className={classes.OrderSummary}>
      <div>
        <p className={classes.ingredient}>
            <strong>dought:</strong> 400 g,<strong>$8</strong>
        </p>
        <p className={classes.ingredient}>
            <strong>cheese:</strong> 40 g,<strong>$4</strong>
        </p>
        <p className={classes.ingredient}>
            <strong>tomato:</strong> 20 g,<strong>$2</strong>
        </p>
        {mappedIng}
      </div>
      <div>
        <p className={classes.price}>total price: <strong style={{fontSize: '20px'}}>{totalPrice.toFixed(2)}</strong></p>
        <Button btnType="Primary">Log In to make a order</Button>
      </div>
    </div>
  )
}

export default OrderSummary;
