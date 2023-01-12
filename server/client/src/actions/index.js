import axios from 'axios'
import { FETCH_USER, FETCH_PROFILES } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  console.log(res.data)
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchProfiles = () => async dispatch => {
  const res = await axios.get('/api/profiles')
  dispatch({ type: FETCH_PROFILES, payload: res.data })
};
