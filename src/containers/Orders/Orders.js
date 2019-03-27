import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './Orders.module.scss';
import * as actions from '../../store/actions/index';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-db';

const Orders = props => {
    useEffect(() => {
        if (props.isAuth) {
            props.onFetchOrders(props.token, props.userId);
        }
    }, [])
    
    if (props.loading){
        return <Spinner />
    } 
    let orders = props.orders.length ? props.orders.map(order => {
        return (
            <Order 
                key={order.id} 
                order={order}
                deleteOrder={() => props.onDeleteOrder(props.token, order.id)}
            />
        )
    }) : <h3 style={{textAlign: 'center'}}>No active orders</h3>

    return (
        <div className={classes.Orders}>

            {props.isAuth ? 
            orders 
            : <h3 style={{textAlign: 'center'}}>Log in to view orders</h3>}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
      orders: state.order.orders,
      loading: state.order.loading,
      isAuth: state.auth.token !== null,
      token: state.auth.token,
      userId: state.auth.userId
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
        onDeleteOrder: (token, id) => dispatch(actions.deleteOrder(token, id)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
