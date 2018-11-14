import React, { Component } from 'react';
import Hotel from '../../Components/Hotels/Hotels';
import Aux from '../../HOC/Aux/Aux';

class HotelContainer extends Component{
    
    render(){
        return( 
            <Aux>
                <Hotel />
            </Aux>
            );
    }
}

export default HotelContainer;
