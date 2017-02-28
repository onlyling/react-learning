import React, { Component } from 'react'
import { classSet } from 'react-addons'

export default class ArticleTitle extends Component {
  render() {

    let headerClassNames = classSet({
      'm-archive-header': true,
      'article': this.props.isArticle
    })

    let info = this.props.titleInfo ? (<p className="info">{this.props.titleInfo}</p>) : ''

    return (
      <header className={headerClassNames}>

        <h2 className="title">{this.props.title}</h2>
        
        {info}

      </header>
    )

  }
}
