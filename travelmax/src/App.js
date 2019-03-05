import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import HotelContainer from './Containers/Hotels/HotelContainer';
import FlightContainer from './Containers/Flights/FlightContainer';
import FlightSearch from './Containers/FlightSearch/FlightSearch';
import HotelSearch from './Containers/HotelSearch/HotelSearch';
import DashboardContainer from './Containers/Dashboard/Template/Dashboard';
import faq from './Containers/FAQ';
import policy from './Containers/Policy';
import BronzeContainer from './Components/Payment/subscribe/Bronze_Package/PayConfirmation';
import SilverContainer from './Components/Payment/subscribe/Silver_Package/PayConfirmation';
import GoldContainer from './Components/Payment/subscribe/Gold_Package/PayConfirmation';
import PlatiniumContainer from './Components/Payment/subscribe/Platinium_Package/PayConfirmation';
import { withAuthentication } from './Components/Sessions';
import AdminPage from './Containers/Admin';
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
            <Route path='/flights_search' exact component={FlightSearch} />
            <Route path='/hotels_search' exact component={HotelSearch} />
            <Route path='/dashboard' exact component={DashboardContainer} />
            <Route path='/admin' exact component={AdminPage} />
            <Route path='/package/subscribe/bronze' exact component={BronzeContainer} />
            <Route path='/package/subscribe/silver' exact component={SilverContainer} />
             <Route path='/package/subscribe/gold' exact component={GoldContainer} />
            <Route path='/package/subscribe/platinium' exact component={PlatiniumContainer} />
            <Route path='/faq' exact component={faq} />
             <Route path='/terms-and-conditions' exact component={policy} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withAuthentication(App);
