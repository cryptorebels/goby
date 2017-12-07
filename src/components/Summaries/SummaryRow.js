import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class SummaryRow extends Component {
  static propTypes = {
    summary: PropTypes.object.isRequired,
  }

  render() {
    const { summary } = this.props
    return (
      <div className='summary-row'>
        <ul>
          <li>
        { summary.exchange }: { summary.benfit }
          </li>
        </ul>
      </div>
    )
  }
}
