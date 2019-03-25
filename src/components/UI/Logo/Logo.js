import React from 'react';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className={classes.Link}><h1 className={classes.Logo}>makeYourPizza</h1></Link>
  )
}

export default Logo;
