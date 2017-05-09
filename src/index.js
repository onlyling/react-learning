// 补丁
require('es6-promise').polyfill()
require('isomorphic-fetch')

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './redux/reducers'

import Routes from './routes'

import 'assets/webapp.less'

let store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('root')
)
