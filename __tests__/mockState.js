const units = require('../src/units')
export const initialState = {
    units,
    vim: {
        cursorPos: units[0].lessons[0].vimState.cursorPos,
        mode: 'NORMAL',
        furthestCol: units[0].lessons[0].vimState.cursorPos.col
    },
    currentLesson: {
        lesson: units[0].lessons[0],
        keyHandler: null
    },
    user: {
        lessons:[],
        displayName: 'test',
        ghID: 12345678,
        username: 'test'
    },

}