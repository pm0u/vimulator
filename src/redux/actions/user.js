import * as types from '../constants/userActions'


const fetchUserDataSuccess = user => ({
    type: types.FETCH_USERDATA_SUCCESS,
    user
})

const fetchUserDataFail = error => ({
    type: types.FETCH_USERDATA_FAIL,
    error
})

const fetchUserDataStart = () => ({
    type: types.FETCH_USERDATA_START
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

export const updateLesson = (lessonId, completed = false) => {
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