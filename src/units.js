const unit1 = {
  "name": "Basic Movement",
    "lessons": [
      {
        "name": "Moving left and right",
        "vimState": {
          "cursorPos": {
            "col": 15,
            "row": 0
          },
          "mode": "NORMAL",
          "furthestCol": 15
        },
        "finishCond": {
          "cursorPos": {
            "col": 0,
            "row": 0
          }
        },
        "keys": {
          "_h": true,
          "_l": true
        },
        "lessonText": [
          "This is a line of text. Move to the first character to complete the lesson!"
        ],
        "hints": {
          "title": "Welcome to Vim!",
          "text": [
            "An important and unique feature of vim to understand is modes. Vim will always open in NORMAL mode. Normal mode is for movement and manipulation of text. Movement is controlled by the h j k and l keys. Think of these like arrow keys. The H and L keys will move the cursor left and right. Try them out!"
          ],
          "additional": [
            "The H and L keys will work in this lesson. Complete the lesson by moving to the first character of the first line."
          ],
          "resources": [
            {
              "href": "https://en.wikibooks.org/wiki/Learning_the_vi_Editor/Vim/Modes",
              "text": "Vim modes from Learning the Vi Editor"
            }
          ]
        }
      },
      {
        "name": "Moving up and down",
        "vimState": {
          "cursorPos": {
            "col": 10,
            "row": 1
          },
          "mode": "NORMAL",
          "furthestCol": 10
        },
        "finishCond": {
          "cursorPos": {
            "col": 0,
            "row": [
              0,
              3
            ]
          }
        },
        "keys": {
          "_h": true,
          "_j": true,
          "_k": true,
          "_l": true
        },
        "lessonText": [
          "This is a line of text",
          "Put the cursor on this period.",
          "move to this line with j",
          "and then j again to this line."
        ],
        "hints": {
          "title": "Moving all around",
          "text": [
            "The J & K keys act as down and up arrow keys respectively. There are a couple interesting functionalities -- the cursor column is preserved when moving from a long line past a short line to another long line. In this example, if the cursor is on the period in line 2 and you move down two lines, you will land on the period again. You'll also notice that the cursor lands on the last character of the shorter line inbetween. This makes a lot of sense when bouncing between repeated lines to edit the same details."
          ],
          "additional": [
            "The H, J, K, and L keys will all work in this lesson. Try them all out! Complete the lesson by moving to the first character of either the first or last line."
          ],
          "resources": [
            {
              "href": "https://en.wikibooks.org/wiki/Learning_the_vi_Editor/Vim/Modes",
              "text": "Vim modes from Learning the Vi Editor"
            }
          ]
        }
      }
    ]
}


const unit2 = {
  "name": "Advanced Movement",
    "lessons": [
      {
        "name": "Start/end of line",
        "vimState": {
          "cursorPos": {
            "col": 20,
            "row": 1
          },
          "mode": "NORMAL",
          "furthestCol": 20
        },
        "finishCond": {
          "cursorPos": {
            "col": 42,
            "row": 0
          }
        },
        "keys": {
          "_0": true,
          "_^": true,
          "__$": true,
          "__":true,
          "_j": true,
          "_k": true
        },
        "lessonText": [
          "Move to end of this line to end the lesson.",
          "  try a ^ and 0 on this line",
          "and this line to see the difference"
        ],
        "hints": {
          "title": "Start/end of line - ^ 0 $ _",
          "text": [
            "The ^, 0, $, and _ keys move within the current line. 0 moves to the first character of the line. ^ and _ will move to the first non-empty character (useful for indented code). $ will move to the end of the current line."
          ],
          "additional": [
            "The J & K keys will work in this lesson to change lines. Complete the lesson by moving to the last character of the first line."
          ]
        }
      },
      {
        "name": "Up/Down line to start",
        "vimState": {
          "cursorPos": {
            "col": 10,
            "row": 0
          },
          "mode": "NORMAL",
          "furthestCol": 10
        },
        "finishCond": {
          "cursorPos": {
            "col": 6,
            "row": 3
          }
        },
        "keys": {
          "_0": true,
          "_^": true,
          "__$": true,
          "_-": true,
          "_+": true
        },
        "lessonText": [
          "teenage mutant ninja turtles",
          "  teenage mutant ninja turtles",
          "    turtles in a half shell!",
          "      TURTLE POWER!!!!!!"
        ],
        "hints": {
          "title": "Moving up and down to first character",
          "text": [
            "+ and - combine some of the movements that we learned in the last couple lessons. - will move up a line and go to the first non empty character (like pressing k ^). + will move down a line and go to first non empty character (like pressing j ^)."
          ],
          "additional": [
            "The 0, $, ^, and _ keys will also work in this lesson. Try moving to ends of lines and then pressing + or -! complete the lesson by moving to the first non-empty character of the last line."
          ]
        }
      }
    ]
}

export {
  unit1,
  unit2
}