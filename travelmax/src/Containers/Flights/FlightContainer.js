import React, { Component } from 'react';
import Flights from '../../Components/Flights/Flights';
import Aux from '../../HOC/Aux/Aux';

class FlightContainer extends Component{
    
    render(){
        return( 
            <Aux>
                <Flights />
            </Aux>
            );
    }
}

export default FlightContainer;