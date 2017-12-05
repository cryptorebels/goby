import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

export default class Error extends Component {
  static propTypes = {
    message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]).isRequired,
  }

  render() {
    const { message } = this.props


    if (!message) {
      return null
    }

    return (
      <div className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <span className="sr-only">Error: </span>
        { message }
      </div>
    )
  }
}
