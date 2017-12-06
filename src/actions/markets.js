import axios from 'axios'
import {
  MARKETS_GET,
  MARKETS_GET_SUCCESS,
  MARKETS_GET_ERROR,
  MARKETS_FILTER,
} from '../constants/actionTypes'
import { uri, parseResponse } from '../utils'

const marketsGet = () => ({
  type: MARKETS_GET,
})

const marketsGetSuccess = (markets) => ({
  type: MARKETS_GET_SUCCESS,
  markets,
})

const marketsGetError = (error) => ({
  type: MARKETS_GET_ERROR,
  error,
})

const marketsFilter = (keyword) => ({
  type: MARKETS_FILTER,
  keyword,
})

export const get = () => (dispatch) => {
  dispatch(marketsGet())

  return axios.get(uri('markets'))
    .then(parseResponse)
    .then((markets) => dispatch(marketsGetSuccess(markets)))
    .catch((error) => dispatch(marketsGetError(error)))
}

export const filter = (keyword) => (dispatch) =>
  dispatch(marketsFilter(keyword))
