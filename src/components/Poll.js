import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/Poll.css';
import Nav from './Nav';
import LoadingBar from 'react-redux-loading-bar';

class Poll extends Component {
  render() {
    const id = this.props.match.params.id;
    const poll = this.props.polls[id];
    return (
      <div className='home'>
        <LoadingBar />
        <div className='Nav'>
          <Nav />
        </div>
        <div className='poll'>
          <ul>
            <li>
              <h2>{poll.question}</h2>
            </li>
            <li>
              <h3>By </h3>
              <img src={this.props.users[poll.author].avatarURL} alt={`Avatar for ${poll.author}`} />
            </li>



          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({authedUser, polls, users}) => {
  return {
    authedUser,
    polls,
    users
  }
}

export default connect(mapStateToProps)(Poll);