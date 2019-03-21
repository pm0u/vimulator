import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Mode extends Component {

    renderMode = () => {
        if (this.props.mode === 'NORMAL') {
            return (<p id='mode'></p>)
        } else {
            return (<p id='mode'>--{this.props.mode}--</p>)
        }
    }

    render() {
        return (
            <>
                {this.renderMode()}
            </>
        )
    }
}

const mapStateToProps = state => ({
    mode: state.vim.mode
})

export default connect(
    mapStateToProps,
    null
)(Mode)
