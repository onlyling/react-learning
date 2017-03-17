import React, { Component } from 'react'
import { PageHeader } from 'components/page'

import './index.less'

export default class Home extends Component {

  render() {

    return (

      <div className="m-page">
        <PageHeader title="知乎" className="zhihu" />
        {this.props.children}
      </div>
      
    )

  }

}