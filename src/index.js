import React from 'react'
import ReactDOM from 'react-dom'

import store from './store'
import Root from './components/Root'

import './index.css'

export default {
  app: (config) => {
    ReactDOM.render(
      <Root store={store()} />,
      document.querySelector(config.selector)
    )
  }
}
