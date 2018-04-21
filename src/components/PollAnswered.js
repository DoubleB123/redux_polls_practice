import React, { Component } from 'react';
import './styles/Poll.css';

class PollAnswered extends Component {
  render() {
    const {poll} = this.props;
    const totalVotes = ['aVotes', 'bVotes', 'cVotes', 'dVotes']
      .reduce((acc, key) => acc + poll[key].length, 0); 

    return( 
      <div className='answered'>
        <li>
          <button>
            <span className='polltext'>
              {poll.aText}
            </span>
            <span className='answertext'>
              {`${poll.aVotes.length / totalVotes * 100}% (${poll.aVotes.length})`}
            </span>
          </button>
        </li> 
        <li>
          <button>
            <span className='polltext'>
              {poll.bText}
            </span>
            <span className='answertext'>
              {`${poll.bVotes.length / totalVotes * 100}% (${poll.bVotes.length})`}
            </span>
          </button>
        </li> 
        <li>
          <button>
            <span className='polltext'>
              {poll.cText}
            </span>
            <span className='answertext'>
              {`${poll.cVotes.length / totalVotes * 100}% (${poll.cVotes.length})`}
            </span>
          </button>
        </li> 
        <li>
          <button>
            <span className='polltext'>
              {poll.dText}
            </span>
            <span className='answertext'>
              {`${poll.dVotes.length / totalVotes * 100}% (${poll.dVotes.length})`}
            </span>
          </button>
        </li> 
      </div>
    );
  }
}

export default PollAnswered;