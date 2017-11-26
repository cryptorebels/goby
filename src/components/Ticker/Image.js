import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Image.scss'

export default class Image extends Component {
  static propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
  }

  render() {
    let logo = <img
      src={this.props.logo}
      alt={this.props.name}
      className='img-responsive ticker-logo'
    />
    if (!this.props.logo) {
      return <span className='no-logo ticker-logo'>¿?</span>
    }
    return logo
  }
}
