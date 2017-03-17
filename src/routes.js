import React, { Component } from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// import Header from 'components/header'
// import Footer from 'components/footer'

import page404 from './page/404'

import zhihuList from './page/zhihu/list'
import zhihuNews from './page/zhihu/news'

class Roots extends Component {
  render() {
    return (
      this.props.children
    );
  }
}

const RouteConfig = (
  <Router history={hashHistory}>
    <Route path="/" component={Roots}>
      <IndexRoute getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./page/app').default)
        })
      }}></IndexRoute>
      <Route path="zhihu" getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./page/zhihu').default)
        })
      }}>
        <IndexRoute component={zhihuList}></IndexRoute>
        <Route path="/zhihu/news" component={zhihuNews}></Route>
      </Route>
      <Route path="*" component={page404}></Route>
    </Route>
  </Router>
)

export default RouteConfig