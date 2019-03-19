import * as types from '../constants/currentLessonActions'
import * as userActions from '../actions/user'
import * as vimActions from '../actions/vim'

export const changeCurrentLesson = (newLesson, unit, keyHandler) => {
  return (dispatch, getState) => {
    const { user: { lessons }, currentLesson: { keyHandler: oldKeyHandler, lesson: currentLesson } } = getState()
    document.removeEventListener('keydown', oldKeyHandler)
    if (currentLesson) {
      dispatch(userActions.updateLesson(currentLesson['_id']))
      dispatch(userActions.postUserData())
    }
    if (lessons && lessons[newLesson['_id']]) {
      dispatch({
        type: types.CHANGE_CURRENT_LESSON,
        unit,
        newLesson,
        keyHandler
      })
      dispatch(vimActions.setVimState(lessons[newLesson['_id']].vimState))
    } else {
      dispatch({
        type: types.CHANGE_CURRENT_LESSON,
        unit,
        newLesson,
        keyHandler
      })
    }
    document.addEventListener('keydown', keyHandler)
  }
}

export const nextLesson = () => {
  return (dispatch, getState) => {
    const { units, currentLesson: { lesson, unit } } = getState()
    const lessonIndex = unit.lessons.indexOf(lesson)
    if (lessonIndex < unit.lessons.length - 1) {
      //change lesson with next index
    } else {
      //is last lesson for unit
      const unitIndex = units.indexOf(unit)
      if (unitIndex < units.length - 1) {
        //there are more units
      } else {
        //no more units
        //display popo up that they should contribute
      }
    }
  }
}