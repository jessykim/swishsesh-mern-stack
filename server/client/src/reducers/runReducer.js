import { FETCH_RUN } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_RUN:
      return action.payload;
    default:
      return state;
  }
}