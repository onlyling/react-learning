import * as types from '../actionTypes'
import * as utils from 'src/utils'

const fetchNodes = () => dispatch => {
    dispatch({
        type: types.GET_NODES_ING,
    })

    utils.$ajaxGet('/api/nodes/all.json')
        .then((res) => {
            dispatch({
                type: types.GET_NODES_SUCCESS,
                list: res
            })
        })
        .catch((data) => {
            console.log(data)
            dispatch({
                type: types.GET_NODES_ERROR,
                error: data
            })
        })
}

const shouldFetchNodes = (state) => {
    let nodes = state.nodes

    console.log('shouldFetchNodes')
    console.log(nodes)

    if (!!!nodes.list.length) {
        return true
    } else if (nodes.isFetching) {
        return false
    } else {
        return false
    }
}

export const getNodes = (formData) => (dispatch, getState) => {

    if (shouldFetchNodes(getState())) {
        return dispatch(fetchNodes())
    }
}