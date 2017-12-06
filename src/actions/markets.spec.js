import configureMockStore from 'redux-mock-store'
import axiosCore from 'axios'
import MockAdapter from 'axios-mock-adapter'
import thunk from 'redux-thunk'

import {
  MARKETS_GET,
  MARKETS_GET_SUCCESS,
} from '../constants/actionTypes'
import * as actions from './markets'

const axios = new MockAdapter(axiosCore)

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const defaultState = {
  all: {},
  ids: [],
  visible: {},
  error: false,
}

const markets = [
  {
    name: 'StartCoin',
    base: 'BTC',
    key: 'BTC-START',
    ticker: 'START',
    logo: 'https://bittrexblobstorage.blob.core.windows.net/public/2b596cad-231b-4252-8b50-0a5895a8a6b4.png',
    id: '5a26e508597a4609068baee2',
    active: true,
  },
  {
    name: 'Monero',
    base: 'BTC',
    key: 'BTC-XMR',
    ticker: 'XMR',
    logo: 'https://bittrexblobstorage.blob.core.windows.net/public/efcda24e-c6c3-4029-982c-15af2915fb08.png',
    id: '5a26e508597a4609068baee0',
    active: true,
  },
]

describe('actions::markets', () => {
  it('get() fires MARKETS_GET && MARKETS_GET_SUCCESS', () => {
    axios.onGet(/markets$/).reply(200, markets)
    const expectedActions = [
      {
        type: MARKETS_GET,
      },
      {
        type: MARKETS_GET_SUCCESS,
        markets,
      },
    ]

    const store = mockStore({ markets: defaultState })

    return store.dispatch(actions.get()).then(() =>
      expect(store.getActions()).toEqual(expectedActions)
    )
  })
})
