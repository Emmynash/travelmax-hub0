import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import HotelContainer from './Containers/Hotels/HotelContainer';
import FlightContainer from './Containers/Flights/FlightContainer';
import FlightSearch from './Containers/FlightSearch/FlightSearch';
import HotelSearch from './Containers/HotelSearch/HotelSearch';
import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/' exact  component={FlightContainer} />
            <Route path='/hotels'  component={HotelContainer} />
            <Route path='/flights/search' exact component={FlightSearch} />
            <Route path='/Hotels/search' exact component={HotelSearch} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
