/**
 * 主题列表
 */

import * as types from '../actionTypes'

let initState = {
    isFetching: false,
    error: '',
    lists: {}
}

export const topicList = (state = initState, action) => {
    switch (action.type) {
        case types.GET_TOPIC_LIST_ING:
            console.log('GET_TOPIC_LIST_ING')
            return Object.assign({}, state, {
                isFetching: true
            })
        case types.GET_TOPIC_LIST_SUCCESS:
            console.log('GET_TOPIC_LIST_SUCCESS')
            let newList = state.lists

            newList[action.node] = action.list
            return Object.assign({}, state, {
                isFetching: false,
                lists: newList
            })
        default:
            console.log('topicList default')
            return state
    }
}

export default topicList