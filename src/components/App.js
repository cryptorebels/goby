import React, { Component } from 'react'

import { setKey } from '../actions/api'

import logo from '../logo.svg'
import './App.css'

export default class App extends Component {
  componentDidMount() {
    this.props.dispatch(setKey(2323))
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
