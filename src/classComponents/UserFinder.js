import { Component } from 'react';
import {UsersContext} from '../store/users-content';
import Users from './Users';
import classes from '../styles/UserFinder.module.css';


class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    }
  }

  /**
   * Like useEffect with no dependencies, componentDidMount will run only once when the component is first 
   * mounted
   */
  componentDidMount() {
    // Doing this only as an example of how componentDidMount could be used if data had to be fetched.
    this.setState({
      filteredUsers: this.context.users
    });
  }

  /**
   * componentDidUpdate is alternative to useEffect. Unlike useEffect, we have no control over when the
   * function runs and therefore we must manually check for changes in state or props to determine whether 
   * anything need to be updated
   * 
   * @param {object} prevProps 
   * @param {object} prevState 
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => {
          return user.name.includes(this.state.searchTerm)
        })
      })
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value })
  };

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

export default UserFinder;