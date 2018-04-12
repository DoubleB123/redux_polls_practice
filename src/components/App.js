import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {handleInitialData} from '../actions/shared';
import Home from './Home';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/leaderboard' component={Home} />
          <Route exact path='/add' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect()(App);