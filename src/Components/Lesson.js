import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCurrentLesson } from '../redux/actions/currentLesson'
import { bindActionCreators } from 'redux'

export class Lesson extends Component {

  render() {
    return (
      <li>
        <button
          onClick={() => this.props.changeCurrentLesson(this.props.lesson, this.props.unit)}
          className={`link-button lesson-button ${this.props.currentLesson && this.props.currentLesson['_id'] === this.props.lesson['_id'] ? 'current-lesson' : null}`}>
            <span className='lesson-button-text'>{this.props.user.lessons && this.props.user.lessons[this.props.lesson['_id']] && this.props.user.lessons[this.props.lesson['_id']].completed ? '✔ ' : '- '}
            {this.props.lesson.name}</span>
            <span className='indicator'>{this.props.currentLesson && this.props.currentLesson['_id'] === this.props.lesson['_id'] ? '←' : null}</span>
        </button>
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeCurrentLesson }, dispatch)

const mapStateToProps = state => ({
  user: state.user,
  currentLesson: state.currentLesson.lesson
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lesson)
