import React from 'react';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = ({isAuth}) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>Make Pizza</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      {isAuth ? 
        <NavigationItem link="/logout">Logout</NavigationItem>
        : <NavigationItem link="/auth">Log In</NavigationItem>}
      
    </ul>
  )
}

export default NavigationItems
