import * as types from '../constants/currentLessonActions'
import { unit1 } from '../../Vim/units'

export const changeCurrentLesson = (lessonId, keyHandler) => {
  let newLesson = unit1.lessons.filter(lesson => lesson.id === lessonId)[0]
  return dispatch => {
    dispatch({
      type: types.CHANGE_CURRENT_LESSON,
      newLesson,
      keyHandler
    })
  }
}
