import * as types from '../constants/currentLessonActions'
import * as userActions from '../actions/user'
import * as vimActions from '../actions/vim'
import keyHandler from '../../Vim/keyHandler'


const changeLesson = (unit, newLesson) => ({
  type: types.CHANGE_CURRENT_LESSON,
  unit,
  newLesson,
  keyHandler: (e) => { keyHandler(e)}
})

export const changeCurrentLesson = (newLesson, unit) => {
  return (dispatch, getState) => {
    const { user: { lessons }, currentLesson: { keyHandler: oldKeyHandler, lesson: currentLesson }, finishWindow } = getState()
    if (currentLesson) {
      dispatch(userActions.saveLesson(currentLesson['_id'], finishWindow))
      dispatch(userActions.postUserData())
    }
    document.removeEventListener('keydown', oldKeyHandler)
    if (lessons && lessons[newLesson['_id']]) {
      dispatch(changeLesson(unit, newLesson))
      dispatch(vimActions.setVimState(lessons[newLesson['_id']].vimState))
    } else {
      dispatch(changeLesson(unit, newLesson))
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


export const restartLesson = () => {
  return (dispatch, getState) => {
    const { user: { lessons }, currentLesson: { lesson: currentLesson, unit } } = getState()
    console.log(currentLesson)
    dispatch(userActions.updateLesson(currentLesson))
    dispatch(changeLesson(unit, currentLesson))
  }
}