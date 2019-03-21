import { combineReducers } from 'redux'
import units from './unitsReducer'
import currentLesson from './currentLesson'
import vim from './vim'
import user from './user'
import loginWindow from './loginWindow'
import finishWindow from './finishWindow'
import allDone from './allDone'

export default combineReducers({ units, currentLesson, vim, user, loginWindow, finishWindow, allDone })