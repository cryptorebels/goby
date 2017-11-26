import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import './index.scss'

export default class Ticker extends Component {
  static PopTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className='ticker col-lg-2 col-md-3 col-sm-4 col-xs-6'>
        <span className='thumbnail'>
          <Image {...this.props} />
          <div className='caption'>
            <span className='name'>{this.props.name}</span>
          </div>
        </span>
      </div>
    )
  }
}
