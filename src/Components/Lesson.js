import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCurrentLesson } from '../redux/actions/currentLesson'
import { bindActionCreators } from 'redux'
import { grandMasterWizardKeyHandler } from '../Vim/grandMasterWizardKeyHandler'
import store from '../redux/store'

export class Lesson extends Component {

  startLesson = () => {
    document.removeEventListener('keydown', store.getState().currentLesson.keyHandler)
    this.props.changeCurrentLesson(this.props.lesson, this.keyHandler)
    document.addEventListener('keydown', this.keyHandler)
  }

  keyHandler = (e) => {
    console.log(e.key, 'pressed')
    const keys = store.getState().currentLesson.lesson.keys
    const mode = store.getState().vim.mode
    const actions = grandMasterWizardKeyHandler(e.key, keys, mode)
    if (actions) store.dispatch(actions.action(...actions.params))
  }

  render() {
    return (
      <li><button onClick={() => this.startLesson()} className='link-button'>{this.props.lesson.name}</button></li>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeCurrentLesson }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Lesson)
