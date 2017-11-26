import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    )
  }
}
