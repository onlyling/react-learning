import React, { Component } from 'react'
import { Link } from 'react-router'
// import { classSet } from 'react-addons'

import './index.less'

class GoLink extends Component {

    render() {
        const _link = this.props.link
        let _className = [
            'btn',
            _link.path.replace(/^\//,'')
        ].join(' ')
        return (
            <li><Link className={_className} to={_link.path}>{_link.title}</Link></li>
        )
    }
}

export default class Home extends Component {

    render() {

        const nav = [{
            title: '知乎',
            path: '/zhihu'
        }, {
            title: 'cnodejs',
            path: '/cnodejs'
        }]

        let NAV_BTNS = nav.map((obj, i) => <GoLink key={i} link={obj} />)

        return (

            <div className="m-page">
                <ul className="app-btns">
                    {NAV_BTNS}
                </ul>
            </div>

        )

    }

}