import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCurrentLesson } from '../redux/actions/currentLesson'
import { bindActionCreators } from 'redux'
import { grandMasterWizardKeyHandler } from '../Vim/grandMasterWizardKeyHandler'

export class Lesson extends Component {
  startLesson = () => {
    this.props.changeCurrentLesson(this.props.lesson.id)
    document.addEventListener('keydown', (e) => {
      grandMasterWizardKeyHandler(e.key)
    })
  }
  render() {
    return (
        <li><button onClick={() => this.props.changeCurrentLesson(this.props.lesson.id)}className='link-button'>{this.props.lesson.name}</button></li>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators( { changeCurrentLesson }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Lesson)
