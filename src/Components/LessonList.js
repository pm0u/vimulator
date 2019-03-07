import React, { Component } from 'react'
import { connect } from 'react-redux'
import Unit from './Unit'

export class LessonsList extends Component {
    renderUnits = () => {
        if (this.props.units) {
            return this.props.units.map((unit,i) => {
                return <Unit key={i} unit={unit} {...i === 0 ? {open:true} : null} />
            })
        }
    }
    render() {
        return (
            <div id='lessons'>
            {this.renderUnits()}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    units: state.units
})

export default connect(
    mapStateToProps,
    null
)(LessonsList)