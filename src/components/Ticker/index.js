import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

export default class Ticker extends Component {
  static PopTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className='ticker col-lg-3 col-md-4'>
        <div className='info-box'>
          <span className='info-box-icon'>
            <Image {...this.props} />
          </span>
          <div className='info-box-content'>
            <div className='box-header no-padding'>
              {this.props.name}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
