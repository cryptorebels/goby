import axios from 'axios'
import {
  BALANCES_GET,
  BALANCES_GET_SUCCESS,
  BALANCES_GET_ERROR,
} from '../constants/actionTypes'
import { uri, parseResponse } from '../utils'

export const balancesGet = () => ({
  type: BALANCES_GET,
})

export const balancesGetSuccess = (balances) => ({
  type: BALANCES_GET_SUCCESS,
  balances,
})

export const balancesGetError = (error) => ({
  typep: BALANCES_GET_ERROR,
  error,
})

export const get = () => (dispatch) => {
  dispatch(balancesGet())

  return axios.get(uri('balances'))
    .then(parseResponse)
    .then((balances) => dispatch(balancesGetSuccess(balances)))
    .catch((error) => dispatch(balancesGetError(error)))
}
