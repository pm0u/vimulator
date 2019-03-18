import React, { Component } from 'react'

export class Footer extends Component {
    //<li><a href="#" target='_self' id='change-colors'>dark mode</a></li>
    //<a href='#' id='lesson-toggle' target='_self'>toggle lessons</a>
    //<a href='#' id='hint-toggle' target='_self'>toggle hints</a>

    render() {
        return (
            <>
                <footer>
                    <div id='footer-list'>
                        <ul id='footer-content'>
                            <li>created by <a href='mailto:paul.mourer@gmail.com'>Paul Mourer</a></li>
                            <li>contribute on <a href='https://www.github.com/pm0u/vimulator'>Github</a></li>
                        </ul>
                    </div>
                </footer>
            </>

        )
    }
}

export default Footer
