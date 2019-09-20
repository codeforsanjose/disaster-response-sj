import React, { Component } from 'react'
// import logo from './logo.svg'
import { Logo } from '../../components/Logo/Logo'
import { LoginButton } from '../../components/LoginButton/LoginButton'
import Navigation from '../../compositions/Navigation/Navigation'

import './App.css'

// <img src={logo} className='App-logo' alt='logo' />
// <h1 className='App-title'>Disaster Response</h1>

class App extends Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    < Logo />
                    < LoginButton />
                </header>
                <Navigation />

            </div>
        )
    }
}

export default App
