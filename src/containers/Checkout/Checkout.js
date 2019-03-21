import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Checkout.module.scss';
import Pizza from '../../components/Pizza/Pizza';
import OrderForm from './OrderForm/OrderForm';
import OrderCheck from '../../components/OrderCheck/OrderCheck';

class Checkout extends Component {
    state = {
        showOrderCheck: true
    }
    continueHandler = () => {
        const scrollHeight = document.body.scrollHeight;
        this.props.history.push(this.props.match.url + '/order-form');
        setTimeout(() => window.scrollTo(0,scrollHeight), 100) 

        this.setState(prevState => ({ 
            showOrderCheck: !prevState.showOrderCheck 
        }))
    }
    cancelHandler = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div className={classes.Checkout}>
                <Pizza ingredients={this.props.ingredients}/>
                {this.state.showOrderCheck ? 
                <OrderCheck 
                    ingredients={this.props.ingredients}
                    continue={this.continueHandler}
                    cancel={this.cancelHandler}/>
                : null}
                
                <Route path={this.props.match.url + '/order-form'} component={OrderForm} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      ingredients: state.mp.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);
