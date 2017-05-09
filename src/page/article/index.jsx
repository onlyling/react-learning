import React, { Component } from 'react'
// import { Link } from 'react-router'
// import { classSet } from 'react-addons'

// import { formatTime2howLong } from 'src/utils'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getTopic } from 'src/redux/actions/topics'

import { Page, PageHeader, PageBody } from 'components/page'

import { formatTime2howLong } from 'src/utils'

import './index.less'

class Header extends Component {
    render() {

        let article = this.props

        return(
            <header className="article-header">
                <div className="avatar">
                    <img src={article.member.avatar_normal} alt={article.member.username} />
                </div>
                <div className="info">
                    <span className="node">{article.node.title}</span>
                    <p>{article.member.username}</p>
                    <p>{formatTime2howLong(article.last_touched)}</p>
                </div>
            </header>
        )
    }
}


class Main extends Component {

    componentWillMount() {
        let {topics, getTopic, params} = this.props
        let id = params.id
        console.log('article--------------------------')
        console.log(topics.topics[id])
        console.log(topics.topics)
        if(!!!topics.topics[id]) {
            getTopic(id)
        }
    }

    render() {

        let {topics, params} = this.props

        let article = topics.topics[params.id] || {
            member: {},
            node: {},
            content_rendered: ''
        }

        // console.log(article)

        return (

            <Page>
                <PageHeader title="详情" />
                <PageBody>
                    <div className="article">
                        
                        <Header {...article} />

                        <h1 className="article-title">{article.title}</h1>

                        <div className="markdown_body" dangerouslySetInnerHTML={{ __html: article.content_rendered.split('↵').join('') }} />

                    </div>
                </PageBody>
            </Page>

        )

    }

}

export default connect(
    state => ({
        topics: state.topics
    }),
    dispatch => ({
        getTopic: bindActionCreators(getTopic ,dispatch)
    })
)(Main)