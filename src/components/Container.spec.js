import React from 'react'
import { mount } from '../utils.spec'
import Container from './Container'

it('renders without crashing', () => {
  const wrapper = mount((props) =>
    <Container {...props}>Hola</Container>
  )
  expect(wrapper.find(Container).length).toEqual(1)
  expect(wrapper.text()).toEqual('Hola')
})
