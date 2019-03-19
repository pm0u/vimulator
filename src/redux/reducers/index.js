import { combineReducers } from 'redux'
import units from './unitsReducer'
import currentLesson from './currentLesson'
import vim from './vim'
import user from './user'
import loginWindow from './loginWindow'

export default combineReducers({ units, currentLesson, vim, user, loginWindow })