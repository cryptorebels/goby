import axios from 'axios'
import {
  SUMMARIES_GET,
  SUMMARIES_GET_SUCCESS,
  SUMMARIES_GET_ERROR,
} from '../constants/actionTypes'
import { uri, parseResponse } from '../utils'

export const summariesGet = () => ({
  type: SUMMARIES_GET,
})

export const summariesGetSuccess = (summaries) => ({
  type: SUMMARIES_GET_SUCCESS,
  summaries,
})

export const summariesGetError = (error) => ({
  type: SUMMARIES_GET_ERROR,
  error,
})

export const get = () => (dispatch) => {
  dispatch(summariesGet())

  return axios.get(uri('summaries'))
    .then(parseResponse)
    .then((summaries) => dispatch(summariesGetSuccess(summaries)))
    .catch((error) => dispatch(summariesGetError(error)))
}
