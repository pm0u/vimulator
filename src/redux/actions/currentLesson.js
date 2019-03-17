import * as types from '../constants/currentLessonActions'

export const changeCurrentLesson = (newLesson, keyHandler) => {
  return dispatch => {
    dispatch({
      type: types.CHANGE_CURRENT_LESSON,
      newLesson,
      keyHandler
    })
  }
}
