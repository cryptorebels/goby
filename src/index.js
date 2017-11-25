import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './containers/App'

const appStore = store()

export default {
  app: (config) => {
    ReactDOM.render(
      <Provider store={appStore}>
        <App />
      </Provider>
    , document.querySelector(config.selector))
  }
}
