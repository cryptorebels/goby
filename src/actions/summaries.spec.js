import configureMockStore from 'redux-mock-store'
import axiosCore from 'axios'
import MockAdapter from 'axios-mock-adapter'
import thunk from 'redux-thunk'

import {
  SUMMARIES_GET,
  SUMMARIES_GET_SUCCESS,
} from '../constants/actionTypes'
import * as actions from './summaries'

const axios = new MockAdapter(axiosCore)

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const defaultState = {
  all: {},
  ids: [],
  error: false,
}

const summaries = [
  {
    Currency: 'ADA',
    Balance: 0,
    Available: 0,
    Pending: 0,
    CryptoAddress: null,
  },
  {
    Currency: 'BAT',
    Balance: 200,
    Available: 0,
    Pending: 0,
    CryptoAddress: null,
  },
]

describe('actions::summaries', () => {
  it('get() fires SUMMARIES_GET && SUMMARIES_GET_SUCCESS', () => {
    axios.onGet(/summaries$/).reply(200, summaries)
    const expectedActions = [
      {
        type: SUMMARIES_GET,
      },
      {
        type: SUMMARIES_GET_SUCCESS,
        summaries,
      },
    ]

    const store = mockStore({ summaries: defaultState })

    return store.dispatch(actions.get()).then(() =>
      expect(store.getActions()).toEqual(expectedActions)
    )
  })
})
