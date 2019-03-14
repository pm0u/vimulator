import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <h3 id='main-heading'>:Vim<span id='ulator'>ulator</span></h3>
                            </li>
                            <li><a href='resources.html' target="_self">resources</a></li>
                        </ul>
                    </nav>
                </header>
            </>
        )
    }
}

export default Header
