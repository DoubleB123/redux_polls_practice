import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/Leaderboard.css';
import Nav from './Nav';
import UserList from './UserList';
import LoadingBar from 'react-redux-loading-bar';

class Leaderboard extends Component {
  render() {
    return (
      <div className='leaderboard'>
        <LoadingBar />
        <div className='Nav'>
          <Nav />
        </div>
        <div className='userlist'>
          {this.props.loading ? null : <UserList />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(Leaderboard);