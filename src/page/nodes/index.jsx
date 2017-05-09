import React, { Component } from 'react'
import { Link } from 'react-router'
// import { classSet } from 'react-addons'

import { Page, PageHeader, PageNav, PageBody } from 'components/page'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getNodes } from 'src/redux/actions/nodes'


import './index.less'


class Main extends Component {

    // constructor(prop) {
    //     super(prop)
    // }

    componentWillMount() {
        let { getNodes } = this.props

        getNodes()
    }

    render() {

        let { nodes } = this.props

        console.log(nodes)

        let _nodes = nodes.list.map((node) => {
            return (
                <li key={node.id} className="node-item">
                    <Link to={`/?node=${node.name}`}>{node.title}</Link>
                </li>
            )
        })

        let noData = ''

        if(!!!nodes.list.length) {
            noData = (<div className="noData">加载中..</div>)
        }

        return (

            <Page>
                <PageHeader title="节点" />
                <PageNav active="节点" />
                <PageBody>
                    <ul className="node-list">
                        {_nodes}
                    </ul>
                    {noData}
                </PageBody>
            </Page>

        )

    }

}

export default connect(
    state => ({
        nodes: state.nodes
    }),
    dispatch => ({
        getNodes: bindActionCreators(getNodes ,dispatch)
    })
)(Main)