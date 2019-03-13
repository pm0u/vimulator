import * as types from '../constants/currentLessonActions'

export const changeCurrentLesson = (lessonId) => ({
  type: types.CHANGE_CURRENT_LESSON,
  lessonId
})
