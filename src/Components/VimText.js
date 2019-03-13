import React, { Component } from 'react'
import { connect } from 'react-redux'

export class VimText extends Component {

    renderText = () => {
        return <pre className='code-line'>    I am a line of code or something</pre>

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
