import { 
  // DELETE_RUN, 
  FETCH_RUNS
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RUNS:
      return action.payload;
    // case DELETE_RUN:
    //   console.log(action.payload, 'ACTION PAYLOAD')
    //   return action.payload
    default:
      return state;
  }
}