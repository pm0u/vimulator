import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleLoginWindow } from '../redux/actions/loginWindow'
import { GithubLoginButton } from 'react-social-login-buttons'

export class LoginModal extends Component {
    render() {
        return (
            <ReactModal
                isOpen={this.props.loginWindow}
                contentLabel='login modal'
                className='pop-up-div'
            >
                <section className='login-window'>
                    <h3>Please login with a provider below</h3>
                    <section>
                        <GithubLoginButton onClick={() => window.location.href='/login/github'}/>
                    </section>
                    <button className='link-button' onClick={this.props.toggleLoginWindow}>close this window</button>
                </section>
            </ReactModal>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ toggleLoginWindow }, dispatch)

const mapStateToProps = state => ({
    loginWindow: state.loginWindow
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginModal)
