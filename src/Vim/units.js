const unit1 = {
  name: 'Movement',
  lessons: [{
    name: 'Basic Movement',
    cursorPos: { col: 10, row: 1 },
    finishCond: {
      cursorPos: { col: 0, row: [0, 3] }
    },
    keys: {
      h: true,
      j: true,
      k: true,
      l: true
    },
    lessonText: [
      `This is a line of text`,
      `Put the cursor on this period.`,
      `move to this line with j`,
      `and then j again to this line.`
    ],
    hints: {
      title: `Welcome to Vim`,
      text: [`The J & K keys act as down and up arrow keys respectively. There are a couple interesting functionalities -- the cursor column is preserved when moving from a long line past a short line to another long line. In this example, if the cursor is on the period in line 2 and you move down two lines, you will land on the period again. You'll also notice that the cursor lands on the last character of the shorter line inbetween. This makes a lot of sense when bouncing between repeated lines to edit the same details.`],
      additional: [`The H, J, K, and L keys will all work in this lesson. Try them all out! complete the lesson by moving to the first character of either the first or last line.`],
      resources: [{ href:"https://en.wikibooks.org/wiki/Learning_the_vi_Editor/Vim/Modes", text:"Vim modes from Learning the Vi Editor"}]
    },
  },
  {
    name: `Start/end of line`,
    cursorPos: { col: 20, row: 1 },
    finishCond: {
      cursorPos: { col: 42, row: 0 }
    },
    keys: {
      '^': true,
      '_$': true,
      '0': true,
      j: true,
      k: true
    },
    lessonText: [
      `Move to end of this line to end the lesson.`,
      `  try a ^ and 0 on this line`,
      `and this line to see the difference`,
    ],
    hints: {
      title: `Start/end of line - ^ 0 $`,
      text: [`The ^, 0, $ keys move within the current line. 0 moves to the first character of the line. ^ will move to the first non-empty character (useful for indented code). $ will move to the end of the current line.`],
      additional: [`The J & K keys will work in this lesson to change lines. Complete the lesson by moving to the last character of the first line.`]
    },
  },
    //  {
    //    id: '1.3',
    //    name: 'Move between words',
    //    finishCond: [],
    //    lessonText: [],
    //    hints: {
    //      title: '',
    //      text: [],
    //      additional: [],
    //      resources: []
    //    },
    //  },
    //  {
    //    id: '1.4',
    //    name: 'Jumping to characters',
    //    finishCond: [],
    //    lessonText: [],
    //    hints: {
    //      title: '',
    //      text: [],
    //      additional: [],
    //      resources: []
    //    },
    //  }
  ]
}

export {
  unit1
}