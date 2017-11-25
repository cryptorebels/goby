import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    dispatch: jest.fn(),
  }

  const enzymeWrapper = mount(<App {...props}/>)

  return {
    props,
    enzymeWrapper,
  }
}

it('renders without crashing', () => {
  const { enzymeWrapper } = setup()
  expect(enzymeWrapper.find('.app-title').text())
    .toBe('Welcome to React')
  expect(enzymeWrapper.find('.app-intro').text())
    .toBe('To get started, edit src/App.js and save to reload.')
})
