import React, { Component } from 'react';


class PollUnanswered extends Component {
  render() {
    const {poll} = this.props;
    return( 
      <div className='unanswered'>
        <li>
          <button>{poll.aText}</button>
        </li> 
        <li>
          <button>{poll.bText}</button>
        </li> 
        <li>
          <button>{poll.cText}</button>
        </li> 
        <li>
          <button>{poll.dText}</button>
        </li> 
      </div>
    );
  }
}

export default PollUnanswered;