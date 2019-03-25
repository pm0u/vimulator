import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { restartLesson } from '../redux/actions/currentLesson'

export class Hints extends Component {


    listKeys = (keys) => {
        return Object.keys(keys).map(key => key[1]).join(' ').replace(/\s([^\s]*)$/, ' and $1')
    }

    renderAdditional = (additional, keys) => {
        return (
        <details open={true}>
            <summary>Additional Hints</summary>
            <h5>Keys</h5>
            {this.listKeys(keys)}
            <h5>Goals</h5>
            {additional.map((hint, key) => {
                return (<p key={key}>{hint}</p>)
            })}
        </details>)
    }

    renderResources = (resources) => {
        return (
            <details>
                <summary>Additional Resources</summary>
                {resources.map((link, i) => {
                    return (<p key={i}><a href={link.href}>{link.text}</a></p>)
                })}
            </details>)
    }

    renderHints = () => {
        if (this.props.currentLesson.lesson) {
            const hints = this.props.currentLesson.lesson.hints
            return (
                <div id='hints-content'>
                    <h4>{hints.title}</h4>
                    {hints.text.map((p, i) => {
                        return (
                            <p key={i}>{p}</p>
                        )
                    })}
                    {hints.additional ? this.renderAdditional(hints.additional, this.props.currentLesson.lesson.keys) : null}
                    {hints.resources ? this.renderResources(hints.resources) : null}
                </div>
            )
        } else {
            return (
                <div id='hints-content'>
                </div>
            )
        }
    }

    renderReset = () => {
        return (<button id='reset' className='link-button' onClick={this.props.restartLesson} {...this.props.currentLesson.lesson ? null : { disabled: true }}>reset lesson</button>)
    }

    render() {
        return (
            <div id='hints'>
                {this.renderHints()}
                <div id='save-reset'>
                    {this.renderReset()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentLesson: state.currentLesson
})

const mapDispatchToProps = dispatch => bindActionCreators({ restartLesson }, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hints)
