import React from 'react'
import { mount } from '../../utils.spec'
import Ticker from './'

const props = {
  logo: 'http://via.placeholder.com/350x150',
  name: 'Placeholdit',
}

describe('<Ticker />', () => {
  it('should render properly', () => {
    const ticker = mount((props) => <Ticker {...props} />, props)

    expect(ticker.find(Ticker).length).toEqual(1)
    expect(ticker.find('Image').length).toEqual(1)
  })
})
