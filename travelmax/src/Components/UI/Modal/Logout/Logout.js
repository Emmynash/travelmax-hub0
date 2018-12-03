import React from 'react';
import { Button } from 'reactstrap';
import { withFirebase } from '../../../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button outline color="secondary" style={{color: "#ef5635"}} onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);