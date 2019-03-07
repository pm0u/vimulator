import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <a href='#' id='lesson-toggle' target='_self'>toggle lessons</a>
                    <div id='footer-list'>
                        <ul id='footer-content'>
                            <li>created by <a href='mailto:paul.mourer@gmail.com'>Paul Mourer</a></li>
                            <li>contribute on <a href='https://www.github.com/pm0u/Q1-proj-vimulator'>Github</a></li>
                            <li><a href="#" target='_self' id='change-colors'>dark mode</a></li>
                        </ul>
                    </div>
                    <a href='#' id='hint-toggle' target='_self'>toggle hints</a>
                </footer>
            </>

        )
    }
}

export default Footer
