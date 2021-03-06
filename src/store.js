import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'
import rootReducer from './reducers'

export default function configureStore() {

  let middleware = [promise, thunk]

  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger]
  }

  // Prepare store with all the middlewares
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
