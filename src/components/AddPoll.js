import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './styles/AddPoll.css';
import Nav from './Nav';

class AddPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      A: '',
      B: '',
      C: '',
      D: '',
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
    console.log('add poll');
    this.props.history.push('/');
  }

  isDisabled = () => {
    const {question, A, B, C, D} = this.state;
    return (question === '' || A === '' ||
        B === '' || C === '' || D === '')
  }

  render() {
    return (
      <div className='addpoll'>
        <div className='Nav'>
          <Nav />
        </div>
        <form className='addpoll-form' onSubmit={this.handleSubmit}>
          <h3>What is your question?</h3>
          <input type='text' value={this.state.question} onChange={(event) => this.handleChange(event, 'question')}/>
          <h3>What are the options?</h3>
          <h4>A.</h4>
          <input type='text' value={this.state.A} onChange={(event) => this.handleChange(event, 'A')}/>
          <h4>B.</h4>
          <input type='text' value={this.state.B} onChange={(event) => this.handleChange(event, 'B')}/>
          <h4>C.</h4>
          <input type='text' value={this.state.C} onChange={(event) => this.handleChange(event, 'C')}/>
          <h4>D.</h4>
          <input type='text' value={this.state.D} onChange={(event) => this.handleChange(event, 'D')}/>

          <button className='addpoll' type='submit' disabled={this.isDisabled()}>Submit</button>
        </form>
      </div>
    );
  }
}

/*
const mapStateToProps = ({authedUser}) => {
  return {
    loading: authedUser === null
  }
}
*/

export default AddPoll;