import React, { Component } from 'react'
import Lesson from './Lesson'

export class Unit extends Component {
    renderLessons = () => {
        if (this.props.unit.lessons) {
            return this.props.unit.lessons.map(lesson => {
                return <Lesson key={lesson.id} lesson={lesson} />
            })
        }
    }
    render() {
        return (
            <>
                <details open={this.props.open}>
                    <summary>{this.props.unit.name}</summary>
                    <ul>
                        {this.renderLessons()}
                    </ul>
                </details>
            </>
        )
    }
}

export default Unit
