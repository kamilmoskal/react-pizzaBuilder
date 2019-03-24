import React from 'react';
import classes from './OrderCheck.module.scss';
import Button from '../UI/Button/Button';

const OrderCheck = (props) => {
    return (
        <div className={classes.OrderCheck}>
            <h1 className={classes.msg}>Do you want to continue order?</h1>
            <div className={classes.buttons}>
                <Button btnType="Danger" clicked={props.cancel}>NO</Button>
                <Button btnType="Primary" clicked={props.continue}>YES</Button>
            </div>
        </div>
    )
}

export default OrderCheck;
