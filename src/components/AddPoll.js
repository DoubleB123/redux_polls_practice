import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/AddPoll.css';
import Nav from './Nav';
import {handleAddPoll} from '../actions/polls';
import LoadingBar from 'react-redux-loading-bar';

class AddPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      a: '',
      b: '',
      c: '',
      d: '',
    }
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange = (event, key) => {
    const newState = {};
    newState[key] = event.target.value;
    this.setState(newState);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(handleAddPoll(this.state));
    this.props.history.push('/');
  }

  isDisabled = () => {
    const {question, a, b, c, d} = this.state;
    return (question === '' || a === '' ||
        b === '' || c === '' || d === '')
  }

  render() {
    return (
      <div className='addpoll'>
        <LoadingBar />
        <div className='Nav'>
          <Nav />
        </div>
        <form className='addpoll-form' onSubmit={this.handleSubmit}>
          <h3>What is your question?</h3>
          <input type='text' value={this.state.question} onChange={(event) => this.handleChange(event, 'question')}/>
          <h3>What are the options?</h3>
          <h4>A.</h4>
          <input type='text' value={this.state.a} onChange={(event) => this.handleChange(event, 'a')}/>
          <h4>B.</h4>
          <input type='text' value={this.state.b} onChange={(event) => this.handleChange(event, 'b')}/>
          <h4>C.</h4>
          <input type='text' value={this.state.c} onChange={(event) => this.handleChange(event, 'c')}/>
          <h4>D.</h4>
          <input type='text' value={this.state.d} onChange={(event) => this.handleChange(event, 'd')}/>

          <button className='addpoll' type='submit' disabled={this.isDisabled()}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddPoll);