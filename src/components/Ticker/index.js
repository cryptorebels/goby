import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import './index.scss'

export default class Ticker extends Component {
  static PopTypes = {
    name: PropTypes.string,
    ticker: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    logo: PropTypes.any.isRequired,
    amount: PropTypes.number,
    orientation: PropTypes.oneOf([
      'horizontal',
      'veritcal',
      null,
    ]),
  }

  render() {
    const { orientation, amount, name } = this.props
    let className = 'ticker col-lg-2 col-md-3 col-sm-4 col-xs-6'
    if (orientation) {
      className += ` ${this.props.orientation}`
    }
    let nameSection = null
    if (name) {
      nameSection = (
        <span className='name'>
          {name}
        </span>
      )
    }
    let amountSection = null
    if (amount) {
      amountSection = (
        <span className='amount'>
          {amount}
        </span>
      )
    }
    let caption = null
    if (amountSection || nameSection) {
      caption = (
        <div className='caption'>
          {nameSection}
          {amountSection}
        </div>
      )
    }

    return (
      <div className={className} title={this.props.name}>
        <span className='thumbnail'>
          <Image {...this.props} />
          {caption}
        </span>
      </div>
    )
  }
}
