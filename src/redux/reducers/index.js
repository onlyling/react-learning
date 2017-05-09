import { combineReducers } from 'redux'

import topics from './topics'
import topicList from './topicList'
import nodes from './nodes'

// console.log(topics)

const todoApp = combineReducers({
    topics,
    topicList,
    nodes
})

export default todoApp

