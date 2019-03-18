import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Login extends Component {
    renderLogin = () => {
        if (this.props.user.displayName) {
            return (
                <>
                <p>{`Logged in as ${this.props.user.displayName} `}(<button className='link-button'>logout</button>)</p>
                </>
            )
        } else {
            return <button className='link-button'>log in to save progress</button>
        }
    }
    render() {
        return (
            <aside>
                {this.renderLogin()}
            </aside>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(
    mapStateToProps,
    null
)(Login)
