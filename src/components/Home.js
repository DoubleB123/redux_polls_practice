import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/Home.css';
import Nav from './Nav';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading-bar';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <LoadingBar />
        <div className='Nav'>
          <Nav />
        </div>
        <div className='Dashboard'>
          {this.props.loading ? null : <Dashboard />}
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

export default connect(mapStateToProps)(Home);