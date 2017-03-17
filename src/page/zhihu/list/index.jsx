import React, { Component } from 'react'
import { Link } from 'react-router'

import { PageBody } from 'components/page'

class Strory extends Component {

  render() {
    return (
      <li className="stories-item">
        <Link className="stories-text" to={`/zhihu/news?id=${this.props.id}`}>
          {this.props.title}
        </Link>
        <div className="stories-img">
          <img src={this.props.images[0]} alt={this.props.title}/>
        </div>
      </li>
    )
  }

}

class Today extends Component {

  render() {

    let _list = this.props.stories.map((obj, i) => <Strory {...obj} key={i} />)

    return (
      <div className="zhihu-day">
        <h2 className="time-title">{this.props.date.replace(/(\d{4})(\d{2})(\d{2})/,'$1-$2-$3')}</h2>
        <ul className="stories-list">
          {_list}
        </ul>
      </div>
    )

  }

}

export default class List extends Component {

  render() {

    let __today = [{
      date: '20170203',
      stories: [{
        id: 232323,
        title: '深夜食堂 · 我的张曼妮',
        images: ['http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png']
      }, {
        id: 232324,
        title: '深夜食堂 · 我的张曼妮2',
        images: ['http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png']
      }, {
        id: 232325,
        title: '深夜食堂 · 我的张曼妮2',
        images: ['http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png']
      }, {
        id: 232326,
        title: '深夜食堂 · 我的张曼妮2',
        images: ['http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png']
      }]
    }, {
      date: '20170203',
      stories: [{
        id: 232333,
        title: '深夜食堂 · 我的张曼妮',
        images: ['http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png']
      }, {
        id: 232334,
        title: '深夜食堂 · 我的张曼妮2',
        images: ['http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png']
      }]
    }]

    let _html = __today.map((obj, i) => <Today {...obj} key={i} />)

    return (

      <PageBody>
        {_html}
      </PageBody>

    )

  }

}
