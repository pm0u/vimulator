import * as types from '../constants/userActions'


const fetchUserDataSuccess = user => ({
    type: types.FETCH_USERDATA_SUCCESS,
    user
})

const postUserDataSuccess = user => ({
    type: types.POST_USERDATA_SUCCESS,
    user
})

const fetchUserDataFail = error => ({
    type: types.FETCH_USERDATA_FAIL,
    error
})

const postUserDataFail = error => ({
    type: types.POST_USERDATA_FAIL,
    error
})

const fetchUserDataStart = () => ({
    type: types.FETCH_USERDATA_START
})

const postUserDataStart = () => ({
    type: types.POST_USERDATA_START
})

export const fetchUserData = () => {
    return async (dispatch) => {
        dispatch(fetchUserDataStart())
        const userResponse = await fetch('/api/user')
        if (userResponse.ok) {
            const user = await userResponse.json()
            dispatch(fetchUserDataSuccess(user))
        } else {
            dispatch(fetchUserDataFail(userResponse.statusText))
        }
    }
}

export const saveLesson = (lessonId, completed = false) => {
    return (dispatch, getState) => {
        const vimState = getState().vim
        dispatch({
            type: types.UPDATE_LESSON,
            lesson: {
                [lessonId]: {
                    vimState,
                    completed
                }
            }
        })
    }
}

export const updateLesson = (lesson, vimState = null, completed = false) => {
    return (dispatch, getState) => {
        dispatch({
            type: types.UPDATE_LESSON,
            lesson: {
                [lesson['_id']]: {
                    vimState: vimState ? vimState : lesson.vimState,
                    completed
                }
            }
        })
    }
}

export const postUserData = () => {
    return async (dispatch, getState) => {
        const user = getState().user
        dispatch(postUserDataStart())
        const userResponse = await fetch('/api/users', {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (userResponse.ok) {
            const user = await userResponse.json()
            dispatch(postUserDataSuccess(user))
        } else {
            dispatch(postUserDataFail(userResponse.statusText))
        }
    }
}

export const logOutUser = () => ({
    type: types.LOGOUT_USER
})