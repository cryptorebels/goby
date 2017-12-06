import configureMockStore from 'redux-mock-store'
import axiosCore from 'axios'
import MockAdapter from 'axios-mock-adapter'
import thunk from 'redux-thunk'

import {
  BALANCES_GET,
  BALANCES_GET_SUCCESS,
} from '../constants/actionTypes'
import * as actions from './balances'

const axios = new MockAdapter(axiosCore)

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const defaultState = {
  all: {},
  ids: [],
  error: false,
}

const balances = [
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

describe('actions::balances', () => {
  it('get() fires BALANCES_GET && BALANCES_GET_SUCCESS', () => {
    axios.onGet(/balances$/).reply(200, balances)
    const expectedActions = [
      {
        type: BALANCES_GET,
      },
      {
        type: BALANCES_GET_SUCCESS,
        balances,
      },
    ]

    const store = mockStore({ balances: defaultState })

    return store.dispatch(actions.get()).then(() =>
      expect(store.getActions()).toEqual(expectedActions)
    )
  })
})
