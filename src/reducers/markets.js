import _ from 'lodash'

import {
  MARKETS_GET_SUCCESS,
  MARKETS_GET_ERROR,
  MARKETS_FILTER,
} from '../constants/actionTypes'

import { idsMapper } from '.'

const defaultState = {
  all: {},
  ids: [],
  visible: {},
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case MARKETS_GET_SUCCESS: {
      const markets = idsMapper(action.data)
      const visible = markets.all

      return {
        ...state,
        ...markets,
        visible,
      }
    }

    case MARKETS_GET_ERROR:
      console.error(action.error)
      return state

    case MARKETS_FILTER: {
      const { all } = state
      const { keyword } = action

      if (!keyword.length) {
        return {
          ...state,
          visible: all,
        }
      }

      const visible = _.filter(all, (market) => {
        for (const key in market) {
          // exclude search in keys with the base keyword on them
          if (['base', 'key'].indexOf(key) !== -1) {
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
