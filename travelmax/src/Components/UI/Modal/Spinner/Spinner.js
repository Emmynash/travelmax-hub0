import React from 'react';
import Loader from 'react-loader-spinner'

 export default class App extends React.Component {
  //other logic
    render() {
     return(
      <Loader 
         type="Plane"
         color="#ef5635"
         height="100"	
         width="100"
      />   
     );
    }
 }