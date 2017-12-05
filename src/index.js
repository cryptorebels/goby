import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'

import './index.css'

export default {
  app: (config) => {
    ReactDOM.render((
      <Provider store={store()}>
        <Root />
      </Provider>
    ), document.querySelector(config.selector))
  }
}
