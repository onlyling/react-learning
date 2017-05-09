/**
 * 节点数据
 * 缓存到本地
 */

import store from 'store'

import * as types from '../actionTypes'

const NODE_CACHE = store.get('nodeList') || {}
const IS_VALID = (NODE_CACHE.time - (+new Date())) < (7 * 24 * 60 * 60 * 1000) // 7天内节点信息不更新

let initState = {
    isFetching: false,
    error: '',
    list: IS_VALID ? NODE_CACHE.list : []
}

console.log(initState)

export const topicList = (state = initState, action) => {
    switch (action.type) {
        case types.GET_NODES_ING:
            console.log('GET_NODES_ING')
            return Object.assign({}, state, {
                isFetching: true,
                list: []
            })
        case types.GET_NODES_SUCCESS:
            console.log('GET_NODES_SUCCESS')
            // 缓存节点
            store.set('nodeList', {
                time: +(new Date()),
                list: action.list
            })
            return Object.assign({}, state, {
                isFetching: false,
                list: action.list
            })
        default:
            console.log('nodes default')
            return state
    }
}

export default topicList