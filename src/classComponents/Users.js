import { Component } from 'react';
import User from './User';

import classes from '../styles/Users.module.css';


class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true
    };
  }

  toggleUsersHandler() {
    // React merges state when using the setState method. If there was another property in the
    // this.state object, we don't need to worry about it being removed in the method below
    this.setState((currentState => {
      return { showUsers: !currentState.showUsers }
    }));
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
