import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import _ from 'lodash'

import Error from '../containers/Error'
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

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Error />
          <Navbar />
          {
            _.map(routes, (route) =>
              <Route {...route} key={route.path} />
            )
          }
        </Container>
      </Router>
    )
  }
}
