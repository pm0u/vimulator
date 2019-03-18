import * as types from '../constants/currentLessonActions'

export const changeCurrentLesson = (newLesson, keyHandler) => {
  return (dispatch, getState) => {
    const lessons = getState().user.lessons
    dispatch({
      type: types.CHANGE_CURRENT_LESSON,
      newLesson,
      keyHandler
    })
  }
}
