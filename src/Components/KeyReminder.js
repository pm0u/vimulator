import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { hideKeyHint } from '../redux/actions/keyHint'

export class KeyReminder extends Component {
    componentDidUpdate() {
        if (this.props.showHint) {
            setTimeout(() => this.props.hideKeyHint(), 4000);
        }
    }
    renderKeyHint = () => {
        if (this.props.showHint) {
            const keys = Object.keys(this.props.currentLesson.lesson.keys).map(key => key[1]).join(',').replace(/,([^,]*)$/, ' or $1')
            return `${this.props.badKey} doesn't work for this lesson! try ${keys}`
        }
    }
    render() {
        return (
            <span id='key-hint'>
                {this.renderKeyHint()}
            </span>
        )
    }
}

const mapStateToProps = state => ({
    currentLesson: state.currentLesson,
    showHint: state.keyHint.showHint,
    badKey: state.keyHint.key
})

const mapDispatchToProps = dispatch => bindActionCreators({ hideKeyHint }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KeyReminder)
