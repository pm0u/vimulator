import React, { Component } from 'react'
import VimText from './VimText'
import CursorPos from './CursorPos'
import Mode from './Mode'

export class VimArea extends Component {
    render() {
        return (
            <div id='vim-box'>
                <div id='vim-content'>
                    <div id='vim-text'>
                    <VimText />
                    </div>
                    <div id='command-bar'>
                        <Mode />
                        <CursorPos />
                    </div>
                </div>
            </div>
        )
    }
}

export default VimArea
