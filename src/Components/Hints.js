import React, { Component } from 'react'

export class Hints extends Component {
    render() {
        return (
            <div id='hints'>
                <div id='hints-content'>
                </div>
                <div id='save-reset'>
                    <a href='#' id='save' target="_self">save</a>
                    <a href='#' id='load' target="_self">load</a>
                    <a href='#' id='reset' target="_self">reset lesson</a>
                </div>
            </div>
        )
    }
}

export default Hints
