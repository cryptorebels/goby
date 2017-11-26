import { API_KEY_SET } from '../constants/actionTypes'
import reducer from './api'

describe('api reducer', () => {
  it('should return the default state', () => {
    expect(reducer(undefined, {})).toEqual({
      key: null,
    })
  })
  it('should store the api to the state', () => {
    expect(reducer({key: null}, {
      type: API_KEY_SET,
      key: 2323,
    })).toEqual({
      key: 2323,
    })
  })
})
