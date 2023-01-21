import { FETCH_RUNS, FETCH_RUN } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RUNS:
      return action.payload;
      case FETCH_RUN:
      console.log(action.payload, 'ACTION PAYLOAD')
      return action.payload;
    default:
      return state;
  }
}