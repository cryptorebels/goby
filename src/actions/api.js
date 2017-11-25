import { API_KEY_SET } from '../constants/actionTypes'

const apiKeySet = (key) => ({
  type: API_KEY_SET,
  key
})

/**
 * Sets the current api key to the state of the app.
 *
 * @param {string} key The api key to be set.
 */
export const setKey = (key) => (dispatch) => dispatch(apiKeySet(key))
