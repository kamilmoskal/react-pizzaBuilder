import React from 'react';
import classes from './OrderSummary.module.scss';
import Button from '../../UI/Button/Button';
import { withRouter } from 'react-router-dom';

const OrderSummary = (props) => {
  const { ingredients } = props;
  const ingredientsArray = []
  for(let key in ingredients){
      ingredientsArray.push({type: key, amount: ingredients[key].amount, price: ingredients[key].price})
  }
  let mappedIng = ingredientsArray.filter(ing => ing.amount !== 0).map(ing => {
    return <p key={ing.type}
              className={classes.ingredient}>
            <strong>{ing.type}:</strong> {ing.amount} g,<strong>${ing.price.toFixed(2)}</strong>
          </p>
  })
  let totalPrice = props.startedPrice;
  ingredientsArray.forEach(ing => totalPrice += ing.price)
  if (mappedIng.length === 0){
    mappedIng = <p style={{textAlign: 'center'}}>ADD INGREDIENTS</p>
  }
  return (
    <div className={classes.OrderSummary}>
      <div>
        <p className={classes.ingredient}>
            <strong>dought:</strong> 300 g,<strong>$7</strong>
        </p>
        <p className={classes.ingredient}>
            <strong>cheese:</strong> 60 g,<strong>$5</strong>
        </p>
        <p className={classes.ingredient}>
            <strong>tomato:</strong> 20 g,<strong>$2</strong>
        </p>
        {mappedIng}
      </div>
      <div>
        <p className={classes.price}>total price: <strong style={{fontSize: '20px'}}>{totalPrice.toFixed(2)}</strong></p>

        {props.isAuth ? 
          <Button 
            btnType="Primary" 
            clicked={() => props.history.push('/checkout')}
            disabled={false}>
            Make a order
          </Button>
        : <Button 
            btnType="Primary" 
            clicked={() => props.history.push('/auth')}
            disabled={false}>
            Log In to make a order
          </Button>}
      </div>
    </div>
  )
}

export default withRouter(OrderSummary);
