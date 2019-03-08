import { combineReducers } from 'redux'
import units from './unitsReducer'
import currentLesson from './currentLesson'

export default combineReducers({ units, currentLesson })