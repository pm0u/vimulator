import React, { Component } from 'react'

export class CodeLine extends Component {
    renderLine = () => {
        if (this.props.cursorPos === parseInt(this.props.cursorPos,10)) {
            return (
                <>
                {this.props.line.slice(0,this.props.cursorPos)}
                <span className='mode-normal-cursor'>
                {this.props.line.slice(this.props.cursorPos,this.props.cursorPos + 1)}
                </span>
                {this.props.line.slice(this.props.cursorPos+1)}
                </>

            )
        } else {
            return this.props.line
        }
    }
    render() {
        return (
            <div>
                <div className='line-nos'>{this.props.lineNo}</div>
                <pre className='code-line'>{this.renderLine()}</pre>
            </div>
        )
    }
}

export default CodeLine
