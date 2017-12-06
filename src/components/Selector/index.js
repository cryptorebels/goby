import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { get } from '../../actions/markets'
import Ticker from '../Ticker'
import Search from './Search'

export default class Selector extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    markets: PropTypes.shape({
      visible: PropTypes.array.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.props.dispatch(get())
  }

  render() {
    const { visible } = this.props.markets

    return (
      <div className="ticker selector">
        <Search {...this.props} />
        <div className="row">
          {
            _.map(visible, (market) => {
              return <Ticker {...market} key={market.id} orientation="horizontal" />
            })
          }
        </div>
      </div>
    )
  }
}
