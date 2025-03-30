import { Component } from 'react';
import classes from '../components/User.module.css';

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
};

export default User;
