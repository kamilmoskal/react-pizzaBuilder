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
          <p className={classes.buyer}>
            order: name: {order.orderData.name}, 
            street: {order.orderData.street},  
            phone: {order.orderData.phone}, 
            delivery: {order.orderData.deliveryMethod}
          </p>

          {arrayOfIng.length > 0 ? 
            arrayOfIng.map(ing => {
            return <p key={ing.type} className={classes.ingLabel}>{ing.type} : {ing.amount} g</p>
            }) 
          : <p>Basic pizza with no extra ingredients</p>}
      </div>
      <Button btnType="Danger" clicked={deleteOrder}>Cancel Order</Button>
    </React.Fragment>
  )
}

export default Order
