import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Checkout.module.scss';
import Pizza from '../../components/Pizza/Pizza';
import Button from '../../components/UI/Button/Button';
import OrderForm from '../OrderForm/OrderForm';

class Checkout extends Component {
    continueHandler = () => {
        const scrollHeight = document.body.scrollHeight;
        this.props.history.push(this.props.match.url + '/order-form');
        setTimeout(() => window.scrollTo(0,scrollHeight), 100) 
    }
    cancelHandler = () => {
        this.props.history.push('/');
        
    }
    render() {
        return (
        <div className={classes.Checkout}>
            <Pizza ingredients={this.props.ingredients}/>
            <h1 className={classes.msg}>Do you want to continue order?</h1>
            <div className={classes.buttons}>
                <Button btnType="Danger" clicked={this.cancelHandler}>NO</Button>
                <Button btnType="Primary" clicked={this.continueHandler}>YES</Button>
            </div>
            
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
