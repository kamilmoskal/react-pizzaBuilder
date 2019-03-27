import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
//import Auth from './containers/Auth/Auth';
//import MakingPizza from './containers/MakingPizza/MakingPizza';
//import Checkout from './containers/Checkout/Checkout';
//import Orders from './containers/Orders/Orders';
//import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import Spinner from './components/UI/Spinner/Spinner';

const Auth = React.lazy(() => import('./containers/Auth/Auth'));
const MakingPizza = React.lazy(() => import('./containers/MakingPizza/MakingPizza'));
const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));
const Orders = React.lazy(() => import('./containers/Orders/Orders'));
const Logout = React.lazy(() => import('./containers/Auth/Logout/Logout'));

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuthentication()
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <React.Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/" exact component={MakingPizza} />
              <Route path="/auth" component={Auth} />
              <Route path="/logout" component={Logout} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Redirect to="/" />
            </Switch>
          </React.Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      onCheckAuthentication: () => dispatch(actions.checkAuthentication())
    }
}

export default connect(null,mapDispatchToProps)(App);
