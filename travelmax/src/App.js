import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import HotelContainer from './Containers/Hotels/HotelContainer';
import FlightContainer from './Containers/Flights/FlightContainer';
import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/' exact component={FlightContainer} />
            <Route path='/hotels' exact component={HotelContainer} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
