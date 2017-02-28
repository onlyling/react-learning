import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Breadcrumbs extends Component {

  static PropTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <div className="m-breadcrumbs">
        你的位置：
        <Link to="/">首页</Link>
        <small>&gt;</small>
        <Link to="/">某个分类</Link>
        <small>&gt;</small>
        <span className="muted">{this.props.title}</span>
      </div>
    )
  }

}
