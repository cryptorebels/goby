import { connectionErrorMessage } from '../utils'
import {
  SUMMARIES_GET_SUCCESS,
  SUMMARIES_GET_ERROR,
  SUMMARIES_GET,
} from '../constants/actionTypes'
import { idsMapper } from '.'

const defaultState = {
  all: {},
  ids: [],
  error: false,
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case SUMMARIES_GET:
      return {
        ...state,
        error: false,
      }

    case SUMMARIES_GET_SUCCESS:
      return {
        ...state,
        ...idsMapper(action.summaries, 'exchange'),
      }

    case SUMMARIES_GET_ERROR:
      return {
        ...state,
        error: connectionErrorMessage(action.error),
      }

    default:
      return state
  }
}
