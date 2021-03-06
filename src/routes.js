import React, { Component } from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// import Header from 'components/header'
// import Footer from 'components/footer'

import page404 from './page/404'

class Roots extends Component {
  render() {
    return (
      this.props.children
    )
  }
}

const RouteConfig = (
  <Router history={hashHistory}>
    <Route path="/" component={Roots}>
      <IndexRoute getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./page/home').default)
        })
      }}></IndexRoute>
      <Route path="t/:id" getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./page/article').default)
        })
      }}>
      </Route>
      <Route path="nodes" getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./page/nodes').default)
        })
      }}>
      </Route>
      <Route path="*" component={page404}></Route>
    </Route>
  </Router>
)

export default RouteConfig