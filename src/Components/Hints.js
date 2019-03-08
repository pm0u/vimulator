import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Hints extends Component {
    renderHints = () => {
        if (this.props.currentLesson) {
            const hints = this.props.currentLesson.hints
            return (
                <div id='hints-content'>
                <h4>{hints.title}</h4>
                {hints.text.map(p => {
                    return (
                        <p>{p}</p>
                    )
                })}
                </div>
            )
        } else {
            return (
                <div id='hints-content'>
                </div>
            )
        }
    }
    render() {
        return (
            <div id='hints'>
            {this.renderHints()}
                <div id='save-reset'>
                    <a href='#' id='save' target="_self">save</a>
                    <a href='#' id='load' target="_self">load</a>
                    <a href='#' id='reset' target="_self">reset lesson</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentLesson: state.currentLesson
})


export default connect(
    mapStateToProps,
    null
)(Hints)
