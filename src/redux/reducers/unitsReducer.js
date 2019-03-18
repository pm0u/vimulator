import * as types from '../constants/unitActions'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_UNITS_SUCCESS:
            return [...state, ...action.units]
        default:
            return state
    }
}