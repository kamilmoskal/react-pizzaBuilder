import React from 'react';
import classes from './Checkbox.module.scss';

const Checkbox = (props) => {
    return (
        <label className={classes.container}>
            <input type="checkbox" />
            <span className={classes.checkmark}></span>
            {props.children}
        </label>
    )
}

export default Checkbox
