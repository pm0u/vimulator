import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CursorPos extends Component {
    render() {
        return (
            <div id='pos-div'>
                <p id='cursor-position'>{this.props.cursorPos.row + 1},{this.props.cursorPos.col + 1}</p>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    cursorPos: state.vim.cursorPos
})

export default connect(
    mapStateToProps,
    null
)(CursorPos)
