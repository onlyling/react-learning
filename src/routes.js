import React, { Component } from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Header from 'components/header'
import Footer from 'components/footer'

import page404 from './page/404'

class Roots extends Component {
  render() {
    return (
      <div className="m-page">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

/*const RouteConfig = (
  <Router history={hashHistory}>
    <Route path="/" onEnter={({ params }, replace) => replace('/home')}></Route>
    <Route path="/home" getComponent={(location, callback) => {
      require.ensure([], function (require) {
        callback(null, require('./page/home').default)
      })
    }}></Route>
    <Route path="/list" getComponent={(location, callback) => {
      require.ensure([], function (require) {
        callback(null, require('./page/list').default)
      })
    }}></Route>
    <Route path="*" component={page404}></Route>
  </Router>
)*/

const RouteConfig = (
  <Router history={hashHistory}>
    <Route path="/" component={Roots}>
      <IndexRoute getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./page/home').default)
        })
      }}></IndexRoute>
      <Route path="list" getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./page/list').default)
        })
      }}></Route>
      <Route path="article" getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./page/article').default)
        })
      }}></Route>
      <Route path="*" component={page404}></Route>
    </Route>
  </Router>
)

export default RouteConfig