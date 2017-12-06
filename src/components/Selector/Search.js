import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { filter } from '../../actions/markets'

export default class Search extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    markets: PropTypes.shape({
      all: PropTypes.object.isRequired,
      ids: PropTypes.array.isRequired,
    }).isRequired,
  }

  sample = ''

  onSearch(e) {
    this.props.dispatch(filter(e.target.value))
  }

  render() {
    if (!this.sample.length) {
      const sample = _.sample(this.props.markets.all)
      if (sample && sample.name) {
        this.sample = sample.name
      }
    }

    return (
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          onKeyUp={this.onSearch.bind(this)}
          autoFocus={true}
          placeholder={this.sample}
        />
      </div>
    )
  }
}
