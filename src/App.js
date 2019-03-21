import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import MakingPizza from './containers/MakingPizza/MakingPizza';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={MakingPizza} />
            <Route path="/auth" component={Auth} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
