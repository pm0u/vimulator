import * as types from '../constants/currentLessonActions'
import * as userActions from '../actions/user'
import * as vimActions from '../actions/vim'

export const changeCurrentLesson = (newLesson, keyHandler) => {
  return (dispatch, getState) => {
    const { user: { lessons }, currentLesson: { lesson: currentLesson } } = getState()
    if (currentLesson) {
      dispatch(userActions.updateLesson(currentLesson['_id']))
      dispatch(userActions.postUserData())
    }
    if (lessons && lessons[newLesson['_id']]) {
      dispatch({
        type: types.CHANGE_CURRENT_LESSON,
        newLesson,
        keyHandler
      })
      dispatch(vimActions.setVimState(lessons[newLesson['_id']].vimState))
    } else {
      dispatch({
        type: types.CHANGE_CURRENT_LESSON,
        newLesson,
        keyHandler
      })
    }
  }
}