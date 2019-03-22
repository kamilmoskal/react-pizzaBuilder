import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  toggleSideDrawerHandler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }))
  }
  render() {
    return (
      <React.Fragment>
        <Toolbar 
          toggleSideDrawer={this.toggleSideDrawerHandler} 
          isAuth={this.props.isAuth}/>
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.toggleSideDrawerHandler}
          isAuth={this.props.isAuth}/>
        <main> 
          {this.props.children}
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);
