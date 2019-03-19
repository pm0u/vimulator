import { unit1 } from '../src/Vim/units'
export const initialState = {
    units: unit1,
    vim: {
        cursorPos: unit1.lessons[0].cursorPos,
        mode: 'NORMAL',
        furthestCol: unit1.lessons[0].cursorPos.col
    },
    currentLesson: {
        lesson: unit1.lessons[0],
        keyHandler: null
    },
    user: {
        lessons:[],
        displayName: 'test',
        ghID: 12345678,
        username: 'test'
    },

}