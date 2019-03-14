import React, { Component } from 'react'
import VimText from './VimText'

export class VimArea extends Component {
    render() {
        return (
            <div id='vim-box'>
                <div id='vim-content'>
                    <div id='vim-text'>
                    <VimText />
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
