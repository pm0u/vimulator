import React, { Component } from 'react'

export class VimArea extends Component {
    render() {
        return (
            <div id='vim-box'>
                <div id='vim-content'>
                    <div id='line-nos'>&nbsp;
                    </div>
                    <div id='vim-text'>
                    </div>
                    <div id='command-bar'>
                        <p id='mode'>--NORMAL--</p>
                        <div id='pos-div'>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VimArea
