import * as types from '../constants/finishConditionActions'


const finisher = () => ({
    type: types.LESSON_FINISHED
})

const conditionChecker = (vimState, finishCond) => {
    return Object.keys(finishCond).map(cond => {
        if (typeof finishCond[cond] === 'object' && typeof vimState[cond] !== 'object') { // finishcondition has multiple conditions, but vimstate is ready to compare
            return finishCond[cond].includes(vimState[cond])
        } else if (typeof finishCond[cond] === 'object' && typeof vimState[cond] === 'object') { //need to dig deeper
            return conditionChecker(vimState[cond], finishCond[cond])
        } else { //dont need to dig deeper and return comparison
            return finishCond[cond] === vimState[cond]
        }
    }).every(condition => condition)
}


export const checkFinishCondition = () => {
    return (dispatch, getState) => {
        const { vim, currentLesson: { lesson: { finishCond } } } = getState()
        const finished = conditionChecker(vim, finishCond)
        if (finished) {
            dispatch(finisher())
        }
    }
}