import React, { Component } from 'react'
import Header from './Components/Header'
import Lessons from './Components/Lessons'
import VimArea from './Components/VimArea'
import Hints from './Components/Hints'
import Footer from './Components/Footer'

export class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Lessons />
                <VimArea />
                <Hints />
                <Footer />
            </>
        )
    }
}

export default App
