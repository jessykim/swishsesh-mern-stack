import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer'
import profilesReducer from './profilesReducer'
import runsReducer from './runsReducer'

export default combineReducers({
  auth: authReducer,
  profiles: profilesReducer,
  form: reduxForm,
  runs: runsReducer
})