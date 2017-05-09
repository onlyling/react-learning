import React, { Component } from 'react'
import { Link } from 'react-router'
// import { classSet } from 'react-addons'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getTopicList } from 'src/redux/actions/topicList'


import { formatTime2howLong } from 'src/utils'

import { Page, PageHeader, PageNav, PageBody } from 'components/page'

import './index.less'

class Main extends Component {

    // constructor(prop) {
    //     super(prop)
    // }

    componentWillMount() {
        let { getMe, location } = this.props
        let node = location.query.node

        getMe({
            node
        })
    }

    render() {

        let { topicList, location } = this.props

        console.log(topicList)

        let node = location.query.node || 'hot'
        let lists = topicList.lists[node] || []

        let items = lists.map((item) => {

            let replies = item.replies ? <div className="replies">{item.replies}</div> : null

            return (
                <li key={item.id}>
                    <header className="header">
                        <div className="avatar">
                            <img src={item.member.avatar_normal} alt={item.member.username} />
                        </div>
                        <div className="info">
                            <span className="node">{item.node.title}</span>
                            {replies}
                            <p>{item.member.username}</p>
                            <p>{formatTime2howLong(item.last_touched)}</p>
                        </div>
                    </header>
                    <div className="item-content">
                        <Link to={`/t/${item.id}`} dangerouslySetInnerHTML={{ __html: item.content.split('↵').join('').substr(0, 100) }}></Link>
                    </div>
                </li>
            )
        })

        let noData = ''

        if(!!!lists.length) {
            noData = (<div className="noData">加载中..</div>)
        }

        return (

            <Page>
                <PageHeader title="首页" />
                <PageNav active="首页" />
                <PageBody>
                    <div className="home-list">
                        <ul>
                            {items}
                        </ul>
                        {noData}
                    </div>
                </PageBody>
            </Page>

        )

    }

}

export default connect(
    state => ({
        topics: state.topics,
        topicList: state.topicList
    }),
    dispatch => ({
        getMe: bindActionCreators(getTopicList ,dispatch)
    })
)(Main)
