import { view, curriculum, vim } from './initVim.js'

view.checkForColors()
view.setCurriculum(curriculum.curriculumListMaker())
view.setHints(curriculum.currLesson)

let save = document.getElementById('save')
let resetLesson = document.getElementById('reset')
let load = document.getElementById('load')
let hintToggle = document.getElementById('hint-toggle')
let lessonToggle = document.getElementById('lesson-toggle')
let darkMode = document.getElementById('change-colors')

hintToggle.addEventListener('click', view.toggleDiv)
lessonToggle.addEventListener('click', view.toggleDiv)
save.addEventListener('click', view.promptForSave)
load.addEventListener('click', view.promptForUpdate)
resetLesson.addEventListener('click', curriculum.currLesson.resetLesson)
darkMode.addEventListener('click', view.changeColors)