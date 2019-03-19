import React, { Component } from 'react';
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
        <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.toggleSideDrawerHandler}/>
        <main> 
          {this.props.children}
        </main>
      </React.Fragment>
    )
  }
}

export default Layout;
