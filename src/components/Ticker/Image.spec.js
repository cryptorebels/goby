import React from 'react'
import { mount } from '../../utils.spec'
import Image from './Image'

const props = {
  logo: 'http://via.placeholder.com/350x150',
  name: 'Placeholdit',
}

describe('<Image />', () => {
  it('should render properly', () => {
    const image = mount((props) => <Image {...props} />, props)

    expect(image.find(Image).length).toBe(1)
  })
})
