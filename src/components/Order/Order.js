import React from 'react';
import classes from './Order.module.scss';
import Button from '../UI/Button/Button';

const Order = ({order, deleteOrder}) => {
    console.log(order)
    let arrayOfIng = []
    for (let key in order.ingredients){
      arrayOfIng.push({
          type: key,
          amount: order.ingredients[key].amount
      })
    }
    arrayOfIng = arrayOfIng.filter(ing => ing.amount !== 0)
  return (
    <React.Fragment>
      <div className={classes.Order}>
          <h2 className={classes.title}>Pizza: ${order.totalPrice}</h2>
          {arrayOfIng && arrayOfIng.map((ing,i) => {
            return <p key={i} className={classes.ingLabel}>{ing.type} : {ing.amount} g</p>
          })}
      </div>
      <Button btnType="Danger" clicked={deleteOrder}>Cancel Order</Button>
    </React.Fragment>
  )
}

export default Order
