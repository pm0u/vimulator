import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class AllDoneModal extends Component {
    render() {
        return (
            <ReactModal
                isOpen={this.props.allDone}
                contentLabel='finish modal'
                className='pop-up-div'
            >
                <section className='login-window'>
                    <section>
                        <h3>Everything Completed!</h3>
                        <p>wow! you are a rockstar!! there's no more lessons. guess you should contribute some? you can also reset all lessons and start over!</p>
                    </section>
                    <div className='finish-buttons'>
                        <button className='link-button' onClick={this.props.restartLesson}>restart all lessons</button>
                        <button className='link-button' onClick={this.props.restartLesson}>close this window</button>
                        <button className='link-button' onClick={this.props.nextLesson}>check out the github repo</button>
                    </div>
                </section>
            </ReactModal>
        )
    }
}

const mapStateToProps = state => ({
    allDone: state.allDone
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
    mapStateToProps,
    null
)(AllDoneModal)
