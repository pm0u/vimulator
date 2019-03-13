import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCurrentLesson } from '../redux/actions/currentLesson'
import { bindActionCreators } from 'redux'
import { grandMasterWizardKeyHandler } from '../Vim/grandMasterWizardKeyHandler'
import store from '../redux/store'

export class Lesson extends Component {
  startLesson = () => {
    this.props.changeCurrentLesson(this.props.lesson.id)
    document.addEventListener('keydown', (e) => {
      console.log(e.key, 'pressed')
      const keys = store.getState().currentLesson.keys
      const mode = store.getState().vim.mode
      const action = grandMasterWizardKeyHandler(e.key, keys, mode)
      if (action) store.dispatch(action)
    })
  }
  render() {
    return (
        <li><button onClick={() => this.startLesson()}className='link-button'>{this.props.lesson.name}</button></li>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators( { changeCurrentLesson }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Lesson)
