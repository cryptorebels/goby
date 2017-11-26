import axios from 'axios'
import {
  MARKETS_GET,
  MARKETS_GET_SUCCESS,
  MARKETS_GET_ERROR,
} from '../constants/actionTypes'

export const get = () => (dispatch) => {
  dispatch({ type: MARKETS_GET })

  return axios.get('http://localhost:8080/markets').then((response) => {
    console.log('Response:', response)
    if (response.status >= 400) {
      console.error('Response error')
      throw new Error(response)
    }
    return response.data
  })
  .then((data) => dispatch({ type: MARKETS_GET_SUCCESS, data }))
  .catch((error) => dispatch({ type: MARKETS_GET_ERROR, error }))
}
