import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCurrentLesson } from '../redux/actions/currentLesson'
import { bindActionCreators } from 'redux'
import keyHandler from '../Vim/keyHandler'

export class Lesson extends Component {

  render() {
    return (
      <li><button onClick={() => this.props.changeCurrentLesson(this.props.lesson, this.props.unit, keyHandler)} className='link-button'>{this.props.lesson.name}</button></li>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeCurrentLesson }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Lesson)
