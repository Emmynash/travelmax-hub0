import React, { Component } from 'react';

import { withFirebase } from '../../Components/Firebase';
import Spinner from '../../Components/UI/Modal/Spinner/Spinner';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      console.log( snapshot.val());

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }
  
   componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
   const { users, loading } = this.state;
    return (
      <div>
        <h1>Admin</h1>
         {loading && <Spinner />}

        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>Firstname:</strong> {user.firstname}
        </span>
        <span>
          <strong>Lastname:</strong> {user.lastname}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Phone no.:</strong> {user.phone}
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(AdminPage);
