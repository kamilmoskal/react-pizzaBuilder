import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Orders.module.scss';
import * as actions from '../../store/actions/index';
import Order from '../../components/Order/Order';

class Orders extends Component {
    componentDidMount(){
        this.props.onFetchOrders()
    }
    render() {
        console.log(this.props.orders)
        return (
        <div className={classes.Orders}>
            {this.props.orders && 
            this.props.orders.length ? this.props.orders.map(order => {
                return (
                    <Order 
                        key={order.id} 
                        order={order}
                        deleteOrder={this.props.onDeleteOrder}
                        />
                )
            }) : <p>No orders</p>}
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      orders: state.order.orders
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders()),
        onDeleteOrder: (id) => dispatch(actions.deleteOrder(id)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
