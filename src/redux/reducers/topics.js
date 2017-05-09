/**
 * 主题
 */

import * as types from '../actionTypes'

let initState = {
    isFetching: false,
    error: '',
    topics: {}
}

export const topics = (state = initState, action) => {
    switch (action.type) {
        case types.UPDATE_TOPIC:
            console.log('UPDATE_TOPIC')
            state.topics[action.id] = action.topic
            return Object.assign({}, state, {
                isFetching: false,
                topics: state.topics
            })
        case types.UPDATE_TOPICS:
            console.log('UPDATE_TOPICS')
            action.topics.forEach((topic) => {
                state.topics[topic.id] = topic
            })
            return Object.assign({}, state, {
                topics: state.topics
            })
        default:
            console.log('topics default')
            return state
    }
}

export default topics