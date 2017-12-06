import { connectionErrorMessage } from '../utils'
import {
  BALANCES_GET_SUCCESS,
  BALANCES_GET_ERROR,
  BALANCES_GET,
} from '../constants/actionTypes'
import { idsMapper } from '.'

const defaultState = {
  all: {},
  ids: [],
  error: false,
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case BALANCES_GET:
      return {
        ...state,
        error: false,
      }

    case BALANCES_GET_SUCCESS:
      return {
        ...state,
        ...idsMapper(action.balances, 'Currency'),
      }

    case BALANCES_GET_ERROR:
      return {
        ...state,
        error: connectionErrorMessage(action.error),
      }

    default:
      return state
  }
}
