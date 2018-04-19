import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './styles/Dashboard.css';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'Unanswered',
    }
  }

  toggleDisplayState(value) {
    if (this.state.display === value){
      return
    }
    if (this.state.display === 'Unanswered'){
      this.setState({display: 'Answered'});
    }
    else {
      this.setState({display: 'Unanswered'});
    }
  }

  render(){
    return(
      <div className='poll-selector'>
        <ul className='poll-selector-list'>
          <li>
            <a onClick={() => this.toggleDisplayState('Unanswered')}
            style={{fontWeight: this.state.display === 'Unanswered' ? 'bold' : 'normal'}}
            >Unanswered</a>
          </li>
          <li>|</li>
          <li>
            <a onClick={() => this.toggleDisplayState('Answered')}
            style={{fontWeight: this.state.display === 'Answered' ? 'bold' : 'normal'}}
            >Answered</a>
          </li>
        </ul>     
        <ul className='poll-display-list'>
          {this.state.display === 'Answered' &&
           this.props.answered.map((item) => (
            <li key={item.id}>
             <Link className='nav-link' to={`/poll/${item.id}`}>{item.question}</Link>
            </li>))
          }
          {this.state.display === 'Unanswered' &&
           this.props.unanswered.map((item) => (
           <li key={item.id}>
             <Link className='nav-link' to={`/poll/${item.id}`}>{item.question}</Link>
           </li>))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({authedUser, polls, users}) => {
  const answers = users[authedUser].answers;
  const answered = answers.map((id) => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(polls).filter((id) => !answers.includes(id)) 
    .map((id) => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp);

  return {
    unanswered,
    answered
  }
}

export default connect(mapStateToProps)(Dashboard);