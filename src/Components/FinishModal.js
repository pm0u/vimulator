import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextLesson, restartLesson } from '../redux/actions/currentLesson'

export class FinishModal extends Component {
    render() {
        return (
            <ReactModal
                isOpen={this.props.finishWindow}
                contentLabel='finish modal'
                className='pop-up-div'
            >
                <section className='login-window'>
                    <section>
                        <h3>Lesson Completed!</h3>
                        <p>you can repeat this lesson, move to the next lesson (if you've already finished it, you'll start from the beginning), or close this window and choose a lesson</p>
                    </section>
                    <div className='finish-buttons'>
                        <button className='link-button' onClick={this.props.restartLesson}>restart this lesson</button>
                        <button className='link-button' onClick={this.props.toggleLoginWindow}>close this window</button>
                        <button className='link-button' onClick={this.props.nextLesson}>start next lesson</button>
                    </div>
                </section>
            </ReactModal>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ nextLesson, restartLesson }, dispatch)

const mapStateToProps = state => ({
    finishWindow: state.finishWindow
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(FinishModal)
