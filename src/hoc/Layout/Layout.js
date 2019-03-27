import React, { useState } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const toggleSideDrawerHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  }
  return (
    <React.Fragment>
      <Toolbar 
        toggleSideDrawer={toggleSideDrawerHandler} 
        isAuth={props.isAuth}/>
      <SideDrawer 
        open={showSideDrawer} 
        closed={toggleSideDrawerHandler}
        isAuth={props.isAuth}/>
      <main> 
        {props.children}
      </main>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);
