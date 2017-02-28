import React, { Component } from 'react'
import { Link } from 'react-router'

import './index.less'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.navData = [{
      name: '首页',
      path: '/'
    }, {
      name: '列表',
      path: '/list'
    }, {
      name: '404',
      path: '/23434343'
    }]
  }

  render() {
    return (
      <header className="m-header m-layout">
        <div className="navbar">
          <h1 className="logo">
            <Link to="/">
              站点名称
            </Link>
          </h1>
          <ul className="nav">
            {
              this.navData.map((item, index) => {
                return (<li key={index}><Link to={item.path}>{item.name}</Link></li>)
              })
            }
          </ul>
        </div>
        <div className="speedbar"></div>
      </header>
    )
  }
}
