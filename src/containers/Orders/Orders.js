import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Orders.module.scss';
import * as actions from '../../store/actions/index';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
    componentDidMount(){
        this.props.onFetchOrders()
    }
    render() {
        if (this.props.loading){
            return <Spinner />
        } 
        let orders = this.props.orders.length ? this.props.orders.map(order => {
            return (
                <Order 
                    key={order.id} 
                    order={order}
                    deleteOrder={this.props.onDeleteOrder}
                    />
            )
        }) : <h3 style={{textAlign: 'center'}}>No active orders</h3>

        return (
            <div className={classes.Orders}>

                {this.props.isAuth ? 
                orders 
                : <h3 style={{textAlign: 'center'}}>Log in to view orders</h3>}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      orders: state.order.orders,
      loading: state.order.loading,
      isAuth: state.auth.token !== null
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders()),
        onDeleteOrder: (id) => dispatch(actions.deleteOrder(id)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
