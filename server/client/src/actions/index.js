import axios from 'axios'
import { FETCH_USER, FETCH_PROFILES, FETCH_RUNS } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchProfiles = () => async dispatch => {
  const res = await axios.get('/api/profiles')
  dispatch({ type: FETCH_PROFILES, payload: res.data })
};

export const submitRun = (values, history) => async dispatch => {
  const res = await axios.post('/api/runs', values);
  console.log(values)

  history.push('/runs');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRuns = () => async dispatch => {
  const res = await axios.get('/api/runs')
  console.log(res.data)
  dispatch({ type: FETCH_RUNS, payload: res.data })
};
