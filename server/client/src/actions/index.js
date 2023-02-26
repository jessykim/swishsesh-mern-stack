import axios from 'axios'
import { FETCH_USER, FETCH_PROFILES, FETCH_RUNS, FETCH_RUN, FETCH_PROFILE, 
  // UPDATE_PROFILE 
} from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchProfiles = () => async dispatch => {
  const res = await axios.get('/api/profiles')
  
  dispatch({ type: FETCH_PROFILES, payload: res.data })
}

export const fetchProfile = (profileId) => async dispatch => {
  const res = await axios.get(`/api/profiles/${profileId}`)

  dispatch({ type: FETCH_PROFILE, payload: res.data })
}

export const submitRun = (values, history) => async dispatch => {
  const res = await axios.post('/api/runs', values);

  history.push('/runs');
  dispatch({ type: FETCH_RUN, payload: res.data });
}

export const submitProfile = async (profileId, values, history) => 
// async dispatch => 
{
  // console.log(values, 'VALUES!')
  // const res = 
  await axios.post(`/api/profiles/${profileId}`, values);
  // console.log(res, 'THIS IS RES')

  history.push(`/profiles/${profileId}`);
  // dispatch({ type: FETCH_PROFILE, payload: res.data });
}

export const signupRun = async (runId, history) => {
  await axios.post(`/api/runs/${runId}/signup`);

  history.push(`/runs/${runId}`);
}

export const removeRun = async (runId, history) => {
  await axios.delete(`/api/runs/${runId}/remove`);

  history.push(`/runs/${runId}`);
}

export const fetchRuns = () => async dispatch => {
  const res = await axios.get('/api/runs')

  dispatch({ type: FETCH_RUNS, payload: res.data })
}

export const fetchRun = (runId) => async dispatch => {
  const res = await axios.get(`/api/runs/${runId}`)
  // console.log(runId)
  dispatch({ type: FETCH_RUN, payload: res.data })
}

export const deleteRun = async (runId) => {
  await axios.delete(`/api/runs/${runId}`)
}