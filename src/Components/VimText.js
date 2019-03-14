import React, { Component } from 'react'
import { connect } from 'react-redux'
import CodeLine from './CodeLine';

export class VimText extends Component {

    renderText = () => {
        const cursorPos = this.props.vim.cursorPos
        if (this.props.currentLesson.lesson) {
            return (
                <>
                    {this.props.currentLesson.lesson.lessonText.map((line, lineNo) => {
                        return <CodeLine cursorPos={lineNo === cursorPos.row ? cursorPos.col : null} line={line} lineNo={lineNo + 1} />
                    })}
                </>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderText()}
            </>
        )
    }
}

const mapStateToProps = state => ({
    vim: state.vim,
    currentLesson: state.currentLesson
})

export default connect(
    mapStateToProps,
    null
)(VimText)
