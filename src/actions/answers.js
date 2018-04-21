import { savePollAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';


function answerPoll(id, answer, authedUser) {
  return {
    type: ADD_ANSWER,
    id,
    authedUser,
    answer: answer + 'Votes'
  }
} 

export const ADD_ANSWER = 'ADD_ANSWER';

export function handleAnswerPoll(id, answer, authedUser) {
  return (dispatch, state) => {
    dispatch(showLoading());
    return savePollAnswer({id, answer, authedUser})
      .then(() => dispatch(answerPoll(id, answer, authedUser)))
      .then(() => dispatch(hideLoading()));
  }
}
