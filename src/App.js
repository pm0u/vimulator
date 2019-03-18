import React, { Component } from 'react'
import Header from './Components/Header'
import LessonList from './Components/LessonList'
import VimArea from './Components/VimArea'
import Hints from './Components/Hints'
import Footer from './Components/Footer'
import { connect } from 'react-redux'
import { fetchUnits } from './redux/actions/units'
import { fetchUserData } from './redux/actions/user'
import { bindActionCreators } from 'redux'
import Cookies from 'universal-cookie'

export class App extends Component {
    componentDidMount = () => {
        const cookies = new Cookies()
        this.props.fetchUnits()
        if (cookies.get('token')) {
            this.props.fetchUserData()
        }
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

const mapDispatchToProps = dispatch => bindActionCreators({ fetchUnits, fetchUserData }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(App)