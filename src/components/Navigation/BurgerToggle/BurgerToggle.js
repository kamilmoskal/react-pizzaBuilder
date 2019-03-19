import React from 'react';
import classes from './BurgerToggle.module.scss';

const BurgerToggle = (props) => {
  return (
    <div onClick={props.clicked} className={classes.BurgerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default BurgerToggle;
