export const CHANGE_CURRENT_LESSON = 'CHANGE_CURRENT_LESSON'

export const changeCurrentLesson = (lessonId) => ({
  type: CHANGE_CURRENT_LESSON,
  payload: lessonId
})
