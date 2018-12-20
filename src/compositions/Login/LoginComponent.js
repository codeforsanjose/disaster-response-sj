import React, { Component } from 'react'
//import LogoComponent from '../../components/Logo/LogoComponent'

import { login } from '../../api/api'
import {
    Redirect,
} from 'react-router-dom'
import './LoginComponent.css'


class LoginComponent extends Component {
    state = {
        email: '',
        passphrase: '',
    }

    handleField = (event, fieldName) => {
        event.preventDefault()
        this.setState({
            [fieldName]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.handleLoggingUser()
    }

    handleLoggingUser = () => {
        login(this.state).then(user => {
            if (user && user._id) {
                this.setState({
                    user,
                    goToProfile: true
                })
            }
            else {
                window.alert('Error logging in please try again')
                this.setState({
                    email: this.state.email,
                    passphrase: ''
                })
            }
        }).catch( (error) => {
            console.log('Error in login', error)
            window.alert('Error logging in please try again')
        })
    }

    render() {
        if (this.state.goToProfile && this.state.user) {
            let userData = this.state.user
            let adminComponentDataAndNavBarFunctions = {
                pathname: `/admin:${userData._id}`,
                state: {
                    userData
                }
            }
            return (
                <Redirect to={adminComponentDataAndNavBarFunctions} />
            )
        }
        return (
            <div>
                <div>
                    <input type="text" name="email" value={this.state.email} onChange={e => this.handleField(e, 'email')} />
                </div>
                <div>
                    <input type="password" name="passphrase" value={this.state.passphrase} onChange={e => this.handleField(e, 'passphrase')} />
                </div>
                <div>
                    <button className="appButton" onClick={e => this.handleSubmit(e)} >login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent
