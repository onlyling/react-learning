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

    let navs = this.navData.map((item, index) => {
      return (<li key={index}><Link to={item.path}>{item.name}</Link></li>)
    })

    return (
      <header className="m-header m-layout">
        <div className="navbar">
          <h1 className="logo">
            <Link to="/">
              站点名称
            </Link>
          </h1>
          <ul className="nav">
            {navs}
          </ul>
          <div className="search">
            <form action="get" className="form">
              <input type="text" className="ui-input" placeholder="输入关键字搜索" />
              <button type="button" className="ui-btn ui-btn-green">搜索</button>
            </form>
            <button type="button" className="ui-btn ui-btn-blue">订阅</button>
          </div>
        </div>

        <div className="speedbar">
          <strong className="fn-green">最新消息：</strong>
          推荐一个朋友的童装店<a href="https://shop135328541.taobao.com" target="_blank">百变小裁缝</a>
        </div>
      </header>
    )
  }
}
