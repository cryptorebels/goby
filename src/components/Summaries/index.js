import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { get as getSummaries } from '../../actions/summaries'

export default class Summaries extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    summaries: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.dispatch(getSummaries())
  }

  render() {
    return (
      <div className='summaries-index'>
        Summaries goes here
      </div>
    )
  }
}
