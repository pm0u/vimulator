import React, { Component } from 'react'
import Login from './Login'

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
                            <li><button className='link-button'>resources</button></li>
                        </ul>
                    </nav>
                    <Login />
                </header>
            </>
        )
    }
}

export default Header
