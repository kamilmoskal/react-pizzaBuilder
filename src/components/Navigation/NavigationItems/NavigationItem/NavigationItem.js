import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.scss';

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link} 
            exact={props.exact}
            className={classes.NavigationItem}
            activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
  )
}

export default NavigationItem;
