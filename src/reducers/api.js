import { API_KEY_SET } from '../constants/actionTypes'

const defaultState = {
  key: null,
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case API_KEY_SET:
      return {
        ...state,
        key: action.key,
      }
    default:
      return state
  }
}
