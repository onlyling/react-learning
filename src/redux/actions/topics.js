/**
 * 主题 actions
 */

import * as types from '../actionTypes'
import * as utils from 'src/utils'

const fetchTopic = (id) => dispatch => {
    dispatch({
        type: types.GET_TOPIC_ING,
    })

    utils.$ajaxGet(`/api/topics/show.json?id=${id}`)
        .then((topics) => {
            dispatch({
                type: types.UPDATE_TOPIC,
                id,
                topic: topics[0]
            })
        })
        .catch((data) => {
            console.log(data)
            dispatch({
                type: types.GET_TOPIC_ERROR,
                error: data
            })
        })
}

const shouldFetchTopic = (state, id) => {
    let topics = state.topics

    console.log('shouldFetchTopic')
    console.log(topics)

    if (!!!topics.topics[id]) {
        return true
    } else if (topics.isFetching) {
        return false
    } else {
        return false
    }
}

export const getTopic = (id) => (dispatch, getState) => {

    if (shouldFetchTopic(getState(), id)) {
        return dispatch(fetchTopic(id))
    }
}

