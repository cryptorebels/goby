import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { get as getBalances } from '../../actions/balances'
import { get as getMarkets } from '../../actions/markets'
import Ticker from '../Ticker'

export default class Balances extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    markets: PropTypes.object.isRequired,
    balances: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.dispatch(getMarkets())
    this.props.dispatch(getBalances())
  }

  render() {
    const { markets, balances } = this.props
    if (!markets.ids.length || !balances.ids.length) {
      return null
    }

    return (
      <div className='balances-index'>
        {
          _.map(balances.all, (balance) => {
            const market = markets.all[balance.Currency]
            if (!market) {
              console.error('Currency not found:', balance)
              return null
            }
            if (!balance.Balance) {
              return null
            }
            return (
              <Ticker
                logo={markets.all[balance.Currency].logo}
                key={balance.Currency}
                amount={`${balance.Balance} ${balance.Currency}`}
              />
            )
          })
        }
      </div>
    )
  }
}
