import React, { Component } from 'react'
import Login from './Login'
import KeyReminder from './KeyReminder'


export class Header extends Component {

    //<li><button className='link-button'>resources</button></li>

    render() {
        return (
            <>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <h3 id='main-heading'>:Vim<span id='ulator'>ulator</span></h3>
                            </li>
                        </ul>
                    </nav>
                    <KeyReminder />
                    <Login />
                </header>
            </>
        )
    }
}

export default Header
