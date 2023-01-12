import axios from 'axios'
import { FETCH_USER, FETCH_PLAYERS } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  console.log(res.data)
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchPlayers = () => async dispatch => {
  const res = await axios.get('/api/players')
  dispatch({ type: FETCH_PLAYERS, payload: res.data })
};
