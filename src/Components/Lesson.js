import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCurrentLesson } from '../redux/actions/currentLesson'
import { bindActionCreators } from 'redux'

export class Lesson extends Component {

  render() {
    return (
      <li>
        {this.props.user.lessons && this.props.user.lessons[this.props.lesson['_id']] && this.props.user.lessons[this.props.lesson['_id']].completed ? '✔ ' : '- '}
        <button
          onClick={() => this.props.changeCurrentLesson(this.props.lesson, this.props.unit)}
          className={`link-button ${this.props.currentLesson && this.props.currentLesson['_id'] === this.props.lesson['_id'] ? 'bold' : null}`}>
          {this.props.lesson.name}
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
