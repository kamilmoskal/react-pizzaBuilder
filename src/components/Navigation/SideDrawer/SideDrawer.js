import React from 'react';
import classes from './SideDrawer.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div className={attachedClasses.join(' ')}>
            <div style={{marginBottom: "40px"}}>
                <Logo />
            </div>
            <nav onClick={props.closed}>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer
