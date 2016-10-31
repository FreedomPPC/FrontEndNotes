import * as types from 'stores/mutation-types'

export const textChange = ({ dispatch, state }, text) => {
    if(text) dispatch(types.TEST, text)
}

export const setTitle = ({ dispatch, state }, str) => {
    if(str) dispatch(types.TITLE, str)
}
