import * as types from '../constants/currentLessonActions'
import * as userActions from '../actions/user'
import * as vimActions from '../actions/vim'
import keyHandler from '../../Vim/keyHandler'

export const changeCurrentLesson = (newLesson, unit) => {
  return (dispatch, getState) => {
    const { user: { lessons }, currentLesson: { keyHandler: oldKeyHandler, lesson: currentLesson }, finishWindow } = getState()
    if (currentLesson) {
      dispatch(userActions.updateLesson(currentLesson['_id'], finishWindow))
      dispatch(userActions.postUserData())
    }
    document.removeEventListener('keydown', oldKeyHandler)
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
      dispatch(changeCurrentLesson(unit.lessons[lessonIndex + 1], unit))
    } else {
      //is last lesson for unit
      const unitIndex = units.indexOf(unit)
      const newUnit = units[unitIndex + 1]
      if (unitIndex < units.length - 1) {
        //there are more units
        dispatch(changeCurrentLesson(newUnit, newUnit.lessons[0]))
      } else {
        //no more units
        //display popo up that they should contribute
      }
    }
  }
}