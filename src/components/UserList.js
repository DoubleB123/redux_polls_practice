import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserProfile from './UserProfile.js';

class UserList extends Component {
  render(){
    return(
      <ul className='userlist-ul'>
        {this.props.users.map((user) => {
          return (<UserProfile user={user} key={user.id}/>);
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({users}) => {
  const usersArr = [];
  Object.keys(users).reduce((arr, val) => {
    arr.push(users[val]);
    return arr
  }, usersArr);
  usersArr.sort((a,b) => (
    (b.answers.length + b.polls.length) - (a.answers.length + a.polls.length)
  ));
  return {
    users: usersArr
  }
}

export default connect(mapStateToProps)(UserList);