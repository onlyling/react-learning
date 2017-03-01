import React, { Component } from 'react'

import ArticleTitle from 'components/articleTitle'
import Breadcrumbs from 'components/breadcrumbs'

export default class Article extends Component {

  constructor(prop) {
    super(prop)
    this.state = {
      datas: {
        '2': {
          id: 2,
          title: '测试数据111',
          imgUrl: 'http://www.onlyling.com/wp-content/themes/D8_3.0/img/thumbnail.png',
          note: '测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦测试内容啦'
        }
      },
      data: {}
    }
  }

  componentWillMount() {

    let id = this.props.location.query.id

    setTimeout(() => {
      // 假若说页面离开了，这样还是会继续修改state的数据，会报错。
      // this.setState({
      //   data: this.state.datas[id]
      // })

      this.setArticleData(this.state.datas[id])

    }, 2000)

  }

  componentWillUnmount() {
    this.setArticleData = () => {}
  }

  setArticleData(data) {

    this.setState({
      data
    })

  }

  render() {
    return (
      <section className="m-body m-layout fn-clear">

        <div className="m-content">

          <Breadcrumbs title={this.state.data.title} />
          <ArticleTitle title={this.state.data.title} isArticle={true} />

        </div>

        <div className="m-sidebar">
          sidebar
        </div>

      </section>
    )
  }

}
