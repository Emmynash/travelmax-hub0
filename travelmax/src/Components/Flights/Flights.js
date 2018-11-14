import React, { Component } from 'react';
import Image from './Image/Image';
import Content from '../Content/Content';
import classes from './Flights.css';
import Aux from '../../HOC/Aux/Aux';




class Flights extends Component{
 
 render(){
    
    return(
        <Aux>
            <Image />
            <div className={classes.body}>
                <Content />
            </div>
        </Aux>
        );
    
    }
    
}

    
export default Flights;



