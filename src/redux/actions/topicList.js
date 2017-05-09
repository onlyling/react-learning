import * as types from '../actionTypes'
import * as utils from 'src/utils'

const fetchTopicList = (formData, node) => dispatch => {

    dispatch({
        type: types.GET_TOPIC_LIST_ING,
        node
    })

    let url = '/api/topics/hot.json'

    if (formData.node) {
        url = `/api/topics/show.json?node_name=${node}`
    }

    console.log(url)

    utils.$ajaxGet(url)
        .then((topics) => {
            // 更新主题
            dispatch({
                type: types.UPDATE_TOPICS,
                topics
            })

            dispatch({
                type: types.GET_TOPIC_LIST_SUCCESS,
                node,
                list: topics
            })
        })
        .catch((data) => {
            console.log(data)
            dispatch({
                type: types.GET_TOPIC_LIST_ERROR,
                node,
                error: data
            })
        })
}

const shouldFetchTopicList = (state, node) => {
    let topicList = state.topicList

    console.log('shouldFetchTopicList')
    console.log(topicList)

    if (!!!(topicList.lists[node] || []).length) {
        return true
    } else if (topicList.isFetching) {
        return false
    } else {
        return false
    }
}

export const getTopicList = (formData) => (dispatch, getState) => {

    let node = formData.node || 'hot'
    let state = getState()

    if (shouldFetchTopicList(state, node)) {
        return dispatch(fetchTopicList(formData, node))
    }

}