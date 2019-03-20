import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { restartLesson } from '../redux/actions/currentLesson'

export class Hints extends Component {

    //<button id='save' className='link-button'>save</button>
    //<button id='load' className='link-button'>load</button>
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
                    {hints.additional ? <details>
                        <summary>Additional Hints</summary>
                        <p>{hints.additional}</p>
                    </details> : null}
                    {hints.resources ? <details><summary>Additional Resources</summary> {hints.resources.map((link, i) => {
                        return (<><a key={i} href={link.href}>{link.text}</a><br key={`b${i}`} /></>)
                    })}</details> : null}
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
