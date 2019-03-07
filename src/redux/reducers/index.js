import { combineReducers } from 'redux'
import units from './unitsReducer'
import currentUnit from './currentUnit'

export default combineReducers({ units, currentUnit })