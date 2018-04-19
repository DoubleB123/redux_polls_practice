import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {handleInitialData} from '../actions/shared';
import Home from './Home';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';
import Poll from './Poll';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/leaderboard' component={Leaderboard} />
          <Route exact path='/add' component={AddPoll} />
          <Route path='/poll/:id' component={Poll} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
