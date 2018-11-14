import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Aux from '../../HOC/Aux/Aux';

class Layout extends Component{
    
    render(props){
        return(<Aux>
                    <Header />
                     <main>{this.props.children}</main>
                    <Footer />
            </Aux>);
    }
}

export default Layout;