import * as types from '../constants/actionTypes'

export const changeCurrentLesson = (lessonId) => ({
  type: types.CHANGE_CURRENT_LESSON,
  lessonId
})
