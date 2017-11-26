import _ from 'lodash'

import { MARKETS_GET_SUCCESS, MARKETS_GET_ERROR } from '../constants/actionTypes'

const defaultState = {
  all: {},
  ids: [],
}

export default (state = defaultState, action = {}) => {
  console.log(action)
  switch (action.type) {
    case MARKETS_GET_SUCCESS:
      return {
        ...state,
        all: action.data,
        ids: _.map(action.data, (market) => market.id),
      }

      case MARKETS_GET_ERROR:
      console.error(action.error)
      return state
    default:
      return state
  }
}
