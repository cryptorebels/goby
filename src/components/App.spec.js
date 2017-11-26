import React from 'react'
import { mount } from '../utils.spec'
import App from './App'

const props = {
  markets: {
    all: {},
    ids: [],
  }
}

it('renders without crashing', () => {
  const wrapper = mount((props) => <App {...props} />, props)
  expect(wrapper.find(App).length).toEqual(1)
})
