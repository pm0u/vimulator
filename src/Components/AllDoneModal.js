import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { noLesson } from '../redux/actions/currentLesson'
import { closeAllDone } from '../redux/actions/allDone'

export class AllDoneModal extends Component {

    closeWindow = () => {
        this.props.noLesson()
        this.props.closeAllDone()
    }

    render() {
        return (
            <ReactModal
                isOpen={this.props.allDone}
                contentLabel='finish modal'
                className='pop-up-div'>
                <section className='login-window'>
                    <section>
                        <h3>Everything Completed!</h3>
                        <p>wow! you are a rockstar!! there's no more lessons. guess you should contribute some? you can also reset all lessons and start over!</p>
                    </section>
                    <div className='finish-buttons'>
                        <button className='link-button' onClick={this.props.restartAllLessons}>restart all lessons</button>
                        <button className='link-button' onClick={this.closeWindow}>close this window</button>
                        <a href='https://www.github.com/pm0u/vimulator' target='_blank'><button className='link-button'>check out the github repo</button></a>
                    </div>
                </section>
            </ReactModal>
        )
    }
}

const mapStateToProps = state => ({
    allDone: state.allDone
})

const mapDispatchToProps = dispatch => bindActionCreators({ noLesson, closeAllDone }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllDoneModal)
