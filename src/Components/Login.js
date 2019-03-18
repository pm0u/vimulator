import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleLoginWindow } from '../redux/actions/loginWindow'

export class Login extends Component {
    renderLogin = () => {
        if (this.props.user.displayName) {
            return (
                <>
                <p>{`Logged in as ${this.props.user.displayName} `}(<button className='link-button'>logout</button>)</p>
                </>
            )
        } else {
            return <button className='link-button' onClick={this.props.toggleLoginWindow}>log in to save progress</button>
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

const mapDispatchToProps = dispatch => bindActionCreators({ toggleLoginWindow }, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
