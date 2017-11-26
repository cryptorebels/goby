import React, { Component } from 'react'
import _ from 'lodash'
import Ticker from './Ticker'
import { get } from '../actions/markets'

import './App.css'

export default class App extends Component {
  componentDidMount() {
    this.props.dispatch(get())
  }

  render() {
    return (
      <div className='row'>
      {
        _.map(this.props.markets.all, (market) => {
          return <Ticker {...market} key={market.id} />
        })
      }
      </div>
    )
  }
}
