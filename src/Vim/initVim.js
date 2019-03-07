import {
  unit1
} from './units.js'
import View from './View/View.js'
import Curriculum from './Curriculum/Curriculum.js'
import Vim from './vim.js'
import Input from './Input/Input.js'

const view = new View()
const curriculum = new Curriculum([unit1])
const vim = new Vim()
const input = new Input()

export { view, curriculum, vim, input }