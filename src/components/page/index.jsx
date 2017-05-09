import React, { Component } from 'react'
import { Link } from 'react-router'
// import { classSet } from 'react-addons'

import './index.less'

export class Page extends Component {
    render() {
        return (
            <div className="page">
                {this.props.children}
            </div>
        )
    }
}

export class PageHeader extends Component {

    render() {

        return (
            <header className="bar bar-nav">
                <h1 className="title">{this.props.title}</h1>
            </header>
        )
    }

}

export class PageNav extends Component {

    constructor(prop) {
        super(prop)

        this.state = {
            navs: [{
                url: '/',
                text: '首页'
            }, {
                url: '/nodes',
                text: '节点'
            }, {
                url: '/me',
                text: '我的'
            }]
        }
    }

    render() {

        let navs = this.state.navs.map((nav, i) => {
            let _className = nav.checked ? 'tab-item active' : 'tab-item'

            return (
                <Link className={_className} to={nav.url} key={i}>
                    <span className="icon"></span>
                    <span className="tab-label">{nav.text}</span>
                </Link>
            )
        })

        return (
            <nav className="bar bar-tab">
                {navs}
            </nav>
        )
    }
}

export class PageBody extends Component {

    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        )
    }

}
