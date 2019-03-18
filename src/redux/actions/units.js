import * as types from '../constants/unitActions'

export const fetchUnitsSuccess = units => ({
    type: types.FETCH_UNITS_SUCCESS,
    units
})

export const fetchUnitsBegin = () => ({
    type: types.FETCH_UNITS_BEGIN
})

export const fetchUnitsFail = error => ({
    type: types.FETCH_UNITS_FAIL,
    error
})

export const setLessons = lessons => ({

})

export const fetchUnits = () => {
    return async (dispatch) => {
        dispatch(fetchUnitsBegin())
        const unitsResponse = await fetch('/api/units')
        if (unitsResponse.ok) {
            const units = await unitsResponse.json()
            dispatch(fetchUnitsSuccess(units))
        } else {
            dispatch(fetchUnitsFail(unitsResponse.statusText))
        }
    }
}