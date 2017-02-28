import './index.less'

import React, { Component } from 'react'

import ArticleTitle from 'components/articleTitle'
import List from 'components/list'

export default class Home extends Component {

  constructor(porps) {

    super(porps)

    this.state = {
      listDate: [{
        id: 2,
        title: '测试数据111',
        imgUrl: 'http://www.onlyling.com/wp-content/themes/D8_3.0/img/thumbnail.png',
        note: '测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦'
      }, {
        id: 2,
        title: '测试数据111',
        imgUrl: 'http://www.onlyling.com/wp-content/themes/D8_3.0/img/thumbnail.png',
        note: '测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦'
      }]
    }

  }

  render() {

    return (
      <section className="m-body m-layout fn-clear">

        <div className="m-content">

          <ArticleTitle title="最新发布" titleInfo="最新资讯一手掌握" />

          <List data={this.state.listDate} />

        </div>

        <div className="m-sidebar">
          sidebar
        </div>

      </section>

    )

  }

}
