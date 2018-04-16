import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/UserProfile.css';

class UserProfile extends Component {
  render(){
    const user = this.props.user;
    return(
      <li className='userprofile-li'>
        <img src={user.avatarURL} alt={`Avatar for ${user.name}`} />
        <div className='userprofile-li-text'>
          <h1>{user.name}</h1>
          <p>{user.polls.length} Poll</p>
          <p>{user.answers.length} Answers</p>
        </div>
      </li>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserProfile;