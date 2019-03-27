import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import classes from './Checkout.module.scss';
import Pizza from '../../components/Pizza/Pizza';
import OrderForm from './OrderForm/OrderForm';
import OrderCheck from '../../components/OrderCheck/OrderCheck';
import Spinner from '../../components/UI/Spinner/Spinner';

const Checkout = props => {
    const [showOrderCheck, setShowOrderCheck] = useState(true);
  
    const continueHandler = () => {
        const scrollHeight = document.body.scrollHeight;
        props.history.push(props.match.url + '/order-form');
        setTimeout(() => window.scrollTo(0,scrollHeight), 100) 

        setShowOrderCheck(!showOrderCheck);
    }
    const cancelHandler = () => {
        props.history.push('/');
    }
    if (!props.isAuth){
        return <Redirect to="/" />
    }
    if (props.ordered){
        return <Redirect to="/orders" />
    }
    if (props.loading){
        return <Spinner />
    }
    return (
        <div className={classes.Checkout}>
            <Pizza ingredients={props.ingredients}/>

            <CSSTransition 
                in={showOrderCheck} 
                timeout={{ enter: 400, exit: 1000 }}
                mountOnEnter
                unmountOnExit
                classNames={{
                        enter: '',
                        enterActive: classes['CheckOpen'],
                        exit: '',
                        exitActive: classes['CheckClosed']
                }}>
                <OrderCheck 
                    ingredients={props.ingredients}
                    continue={continueHandler}
                    cancel={cancelHandler}/>
            </CSSTransition>
            
            <Route path={props.match.url + '/order-form'} component={OrderForm} />
        </div>
    )
}
const mapStateToProps = state => {
    return {
      ingredients: state.mp.ingredients,
      loading: state.order.loading,
      ordered: state.order.ordered,
      isAuth: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Checkout);
