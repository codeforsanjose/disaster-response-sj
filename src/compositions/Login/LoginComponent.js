import React, { Component } from 'react'

import { login } from '../../api/api'
import {
    Redirect,
} from 'react-router-dom'
import './LoginComponent.css'


class LoginComponent extends Component {
    state = {
        email: '',
        passphrase: '',
        error: '',
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
                this.setState({
                    email: this.state.email,
                    passphrase: '',
                    error: 'Error logging in please try again',
                })
            }
        }).catch( (error) => {
            console.log('Error in login', error)
            this.setState({
                email: this.state.email,
                passphrase: '',
                error: 'Error logging in please try again',
            })
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
        const error = this.state.error !== ''
            ? <div className='error'>{ this.state.error }</div>
            : null
        return (
            <div className='LoginComponent'>
                <section className='email'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        placeholder="youremail@mail.com"
                        type='email'
                        id='email'
                        name='email'
                        value={this.state.email}
                        onChange={e => this.handleField(e, 'email')}
                    />
                </section>
                <section className='passphrase'>
                    <label htmlFor='passphrase'>Passphrase:</label>
                    <input
                        placeholder="Enter Your Password"
                        type='password'
                        name='passphrase'
                        value={this.state.passphrase}
                        onChange={e => this.handleField(e, 'passphrase')}
                    />
                </section>

                <button className='login' onClick={e => this.handleSubmit(e)} >login</button>
                { error }
            </div>
        )
    }
}

export default LoginComponent
