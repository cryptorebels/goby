// This file contains utils used for testing purposes
import {
  configure,
  mount as eMount,
  shallow as eShallow,
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { uri, connectionErrorMessage } from './utils'

configure({ adapter: new Adapter() })

export const shallow = eShallow

export const mount = (component, defaults = {}) => {
  const props = {
    dispatch: jest.fn(),
    ...defaults,
  }

  return eMount(component(props))
}

describe('utils', () => {
  describe('uri()', () => {
    it('should return a valid URI by default', () => {
      expect(uri('balances')).toBe('http://localhost:8080/balances')
    })
    it('should append the ?filter= with conditions, if they\'re passed', () => {
      const filter = `?filter=${JSON.stringify({where: { Currency: 'XRP' }})}`
      expect(uri('balances', { Currency: 'XRP' }))
        .toBe(`http://localhost:8080/balances${filter}`)
    })
  })

  describe('connectionErrorMessage()', () => {
    it('should return API connection issue message if no response is defined', () => {
      expect(connectionErrorMessage({}))
        .toBe('Apparently there\'s no connection with the API')
    })
    it('should return default message if error is not catched by us', () => {
      expect(connectionErrorMessage({ response: { status: 380 } }))
        .toBe('There was a connection problem')
    })
    it('should return statusText when status >= 400', () => {
      const error = {
        response: {
          status: 400,
          statusText: 'test',
        },
      }
      expect(connectionErrorMessage(error))
        .toBe('test')
    })
  })
})
