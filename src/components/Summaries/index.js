import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { get as getSummaries } from '../../actions/summaries'
import SummaryRow from './SummaryRow'

export default class Summaries extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    summaries: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.dispatch(getSummaries())
  }

  render() {
    const rows = this.props.summaries.ids.map((summaryId) => {
      const summary = this.props.summaries.all[summaryId]
      return <SummaryRow key={summaryId} summary={summary} />
    })
    return (
      <div className='summaries-index'>
        {rows}
      </div>
    )
  }
}
