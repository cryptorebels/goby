import { combineReducers } from 'redux'
import api from './api'
import markets from './markets'

export default combineReducers({
  api,
  markets,
})
