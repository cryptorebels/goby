import React from 'react'
import { mount } from '../../utils.spec'
import Error from './'

describe('<Error />', () => {
  it('should render properly', () => {
    const error = mount((props) => <Error {...props} />, { message: '' })

    expect(error.find(Error).length).toEqual(1)
  })

  it('should not render if message === false', () => {
    const error = mount((props) => <Error {...props} />, { message: false })

    expect(error.find('div.alert').length).toBe(0)
  })

  it('should render if message !== false', () => {
    const error = mount((props) => <Error {...props} />, { message: 'Alloh' })
    const alert = error.find('div.alert')

    expect(alert.length).toBe(1)
    expect(alert.text()).toBe('Error: Alloh')
  })
})
