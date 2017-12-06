import _ from 'lodash'

import { connectionErrorMessage } from '../utils'
import {
  MARKETS_GET_SUCCESS,
  MARKETS_GET_ERROR,
  MARKETS_FILTER,
  MARKETS_GET,
} from '../constants/actionTypes'
import { idsMapper } from '.'

const defaultState = {
  all: {},
  ids: [],
  visible: [],
  error: false,
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case MARKETS_GET:
      return {
        ...state,
        error: false,
      }

    case MARKETS_GET_SUCCESS: {
      const markets = idsMapper(action.markets, 'ticker')

      return {
        ...state,
        ...markets,
        visible: Object.values(markets.all),
      }
    }

    case MARKETS_GET_ERROR:
      return {
        ...state,
        error: connectionErrorMessage(action.error),
      }

    case MARKETS_FILTER: {
      const { all } = state
      const { keyword } = action

      if (!keyword.length) {
        return {
          ...state,
          visible: Object.values(all),
        }
      }

      const visible = _.filter(all, (market) => {
        for (const key in market) {
          // exclude search in keys with the base keyword on them
          if (['base', 'key', 'logo'].indexOf(key) !== -1) {
            continue
          }

          const value = market[key]

          if (new RegExp(keyword, 'i').test(value)) {
            return true
          }
        }
        return false
      })

      return {
        ...state,
        visible,
      }
    }

    default:
      return state
  }
}
