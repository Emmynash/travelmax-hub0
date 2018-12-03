import React from 'react';

// here, react context API is used in order to provided firebase instance

const firebaseContext = React.createContext(null);

// A higher order component to handle the context
export const withFirebase = Component => props => (
 <firebaseContext.Consumer>   
 {firebase => <Component {...props} firebase={firebase}/>}
 </firebaseContext.Consumer>
);

export default firebaseContext;