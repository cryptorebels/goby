// This file contains utils used for testing purposes
import {
  configure,
  mount as eMount,
  shallow as eShallow,
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

export const shallow = eShallow

export const mount = (component, defaults = {}) => {
  const props = {
    dispatch: jest.fn(),
    ...defaults,
  }

  return eMount(component(props))
}
