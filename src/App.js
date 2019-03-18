import React, { Component } from 'react'
import Header from './Components/Header'
import LessonList from './Components/LessonList'
import VimArea from './Components/VimArea'
import Hints from './Components/Hints'
import Footer from './Components/Footer'
import { connect } from 'react-redux'
import { fetchUnits } from './redux/actions/units'
import { bindActionCreators } from 'redux'
import Cookies from 'universal-cookie'

export class App extends Component {
    componentDidMount = () => {
        const cookies = new Cookies()
        console.log(cookies.get('token'))
        this.props.fetchUnits()
    }
    render() {
        return (
            <>
                <Header />
                <LessonList />
                <VimArea />
                <Hints />
                <Footer />
            </>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators( { fetchUnits }, dispatch)

export default connect(
    null,
    mapDispatchToProps
    )(App)