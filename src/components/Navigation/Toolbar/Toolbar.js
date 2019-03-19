import React from 'react';
import classes from './Toolbar.module.scss';
import BurgerToggle from '../BurgerToggle/BurgerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';


const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
        <Logo />
        <BurgerToggle clicked={props.toggleSideDrawer}/>
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
    </header>
  )
}

export default Toolbar;
