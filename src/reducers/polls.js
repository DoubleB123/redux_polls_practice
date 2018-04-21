import { RECEIVE_POLLS, ADD_POLL } from '../actions/polls';
import {ADD_ANSWER} from '../actions/answers';

export default function polls(state = {}, action){
  switch(action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls
      }
    case ADD_POLL:
      return{
        ...state,
        [action.poll.id]: action.poll
      }
    case ADD_ANSWER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: state[action.id][action.answer].concat([action.authedUser])
        }
      }
    default:
      return state;
  }
}