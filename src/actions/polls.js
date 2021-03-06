import { savePoll } from '../utils/api';
import { showLoading, hideLoading} from 'react-redux-loading-bar';

function addPoll(poll) {
  return{
    type: ADD_POLL,
    poll
  }
}

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

export function handleAddPoll(poll) {
  return (dispatch, getState) => {
    const {authedUser} = getState();
    dispatch(showLoading());
    return (savePoll({
           ...poll,
           author: authedUser
    })
    .then((newPoll) => {
      console.log(newPoll);
      return dispatch(addPoll(newPoll))
    })
    .then(() => dispatch(hideLoading()))
    );
  }
}
