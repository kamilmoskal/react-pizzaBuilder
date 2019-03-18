import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import MakingPizza from './containers/MakingPizza/MakingPizza';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
            <MakingPizza />
        </Layout>
      </div>
    );
  }
}

export default App;
