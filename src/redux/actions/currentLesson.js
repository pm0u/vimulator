import * as types from '../constants/currentLessonActions'
import * as userActions from '../actions/user'
import * as vimActions from '../actions/vim'
import * as allDoneTypes from '../constants/allDoneActions'
import * as finishTypes from '../constants/finishConditionActions'
import keyHandler from '../../Vim/grandMasterWizardKeyHandler'

const changeLesson = (newLesson, unit) => ({
  type: types.CHANGE_CURRENT_LESSON,
  unit,
  newLesson,
  keyHandler
})

export const changeCurrentLesson = (newLesson, unit) => {
  return (dispatch, getState) => {
    const { user: { lessons }, currentLesson: { lesson: currentLesson }, finishWindow } = getState()
    if (currentLesson) {
      dispatch(userActions.saveLesson(currentLesson['_id'], finishWindow))
      dispatch(userActions.postUserData())
      //document.removeEventListener('keydown', keyHandler)
    }
    if (lessons && lessons[newLesson['_id']]) {
      dispatch(changeLesson(newLesson, unit))
      dispatch(vimActions.setVimState(lessons[newLesson['_id']].vimState))
    } else {
      dispatch(changeLesson(newLesson, unit))
    }
    document.addEventListener('keydown', keyHandler)
  }
}

export const nextLesson = () => {
  return (dispatch, getState) => {
    const { units, currentLesson: { lesson, unit }, vim } = getState()
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
        dispatch(changeCurrentLesson(newUnit.lessons[0]))
      } else {
        //no more units
        //display popo up that they should contribute
        dispatch(userActions.updateLesson(lesson, vim, true))
        dispatch({
          type: finishTypes.CLOSE_FINISH_WINDOW
        })
        dispatch({
          type: allDoneTypes.OPEN_ALL_DONE
        })
      }
    }
  }
}


export const restartLesson = () => {
  return (dispatch, getState) => {
    const { user: { lessons }, currentLesson: { lesson: currentLesson, unit } } = getState()
    dispatch(userActions.updateLesson(currentLesson))
    dispatch(changeLesson(currentLesson, unit))
    document.addEventListener('keydown', keyHandler)
  }
}

export const noLesson = () => {
  return (dispatch, getState) => {
    document.removeEventListener('keydown', keyHandler)
    dispatch({
      type: types.NO_LESSON
    })
  }
}