import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import _ from 'lodash'

import Selector from '../containers/Selector'
import Dashboard from '../containers/Dashboard'
import Container from './Container'
import Navbar from './Navbar'

const routes = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/ticker-add',
    component: Selector,
  },
]

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Container>
        <Navbar />
        {
          _.map(routes, (route) =>
            <Route {...route} key={route.path} />
          )
        }
      </Container>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
