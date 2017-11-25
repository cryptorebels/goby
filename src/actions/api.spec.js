import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { API_KEY_SET } from '../constants/actionTypes'
import * as actions from './api'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('api actions', () => {
  it('setKey calls API_KEY_SET', () => {
    const expectedActions = [
      {
        type: API_KEY_SET,
        key: 2323,
      },
    ]

    const store = mockStore({ api: {}})

    store.dispatch(actions.setKey(2323))

    return expect(store.getActions()).toEqual(expectedActions)
  })
})
