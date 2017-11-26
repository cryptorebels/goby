import {
    MARKETS_GET,
    MARKETS_GET_SUCCESS,
    MARKETS_GET_ERROR,
    MARKETS_FILTER,
} from '../constants/actionTypes'

import {
  get as getMarkets,
} from '../api/markets'

export const get = () => (dispatch) => {
  dispatch({ type: MARKETS_GET })

  return getMarkets()
    .then((data) => dispatch({ type: MARKETS_GET_SUCCESS, data }))
    .catch((error) => dispatch({ type: MARKETS_GET_ERROR, error }))
}

export const filter = (keyword) => (dispatch) =>
  dispatch({ type: MARKETS_FILTER, keyword })
