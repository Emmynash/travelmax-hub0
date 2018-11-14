import React, { Component } from 'react';
import Image from './Image/Image';
import Content from './Content/Content'
import Aux from '../../HOC/Aux/Aux';

class Hotels extends Component{
    render(){
        return(
            <Aux>
                <Image />
                <Content />
            </Aux>
            );
    }
}

export default Hotels;