import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import profilesReducer from './profilesReducer'
import runsReducer from './runsReducer'
import runReducer from './runReducer'

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  profiles: profilesReducer,
  form: reduxForm,
  // profileForm: reduxForm,
  runs: runsReducer,
  run: runReducer
})