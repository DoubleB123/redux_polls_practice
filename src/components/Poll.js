import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/Poll.css';
import Nav from './Nav';
import LoadingBar from 'react-redux-loading-bar';
import PollUnanswered from './PollUnanswered';
import PollAnswered from './PollAnswered';

class Poll extends Component {
  render() {
    const {poll, vote, avatar} = this.props;
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
              <img src={avatar} alt={`Avatar for ${poll.author}`} />
            </li>
            
            {vote == null ? <PollUnanswered poll={poll}/>
                          : <PollAnswered poll={poll} />
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({authedUser, polls, users}, {match}) => {
  const id = match.params.id;
  const poll = polls[id];

  const vote = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].reduce((acc, key) => {
    if (acc !== null) {
      return acc;
    }
    if (poll[key].includes(authedUser)) {
      return key[0]; 
    }
    else {
      return acc;
    }
  }, null);


  return {
    vote,
    poll,
    avatar: users[poll.author].avatarURL
  }
}

export default connect(mapStateToProps)(Poll);