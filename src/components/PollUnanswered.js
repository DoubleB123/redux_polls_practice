import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerPoll } from '../actions/answers';

class PollUnanswered extends Component {
  handleClick(id, answer, authedUser) {
    this.props.dispatch(handleAnswerPoll(id, answer, authedUser));
  }

  render() {
    const {poll, authedUser} = this.props;
    return( 
      <div className='unanswered'>
        <li>
          <button onClick={() => this.handleClick(poll.id, 'a', authedUser)}>{poll.aText}</button>
        </li> 
        <li>
          <button onClick={() => this.handleClick(poll.id, 'b', authedUser)}>{poll.bText}</button>
        </li> 
        <li>
          <button onClick={() => this.handleClick(poll.id, 'c', authedUser)}>{poll.cText}</button>
        </li> 
        <li>
          <button onClick={() => this.handleClick(poll.id, 'd', authedUser)}>{poll.dText}</button>
        </li> 
      </div>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}
  

export default connect(mapStateToProps)(PollUnanswered);