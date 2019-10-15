import React, { Component } from 'react'
import { Logo } from '../../components/Logo/Logo'
import { LoginButton } from '../../components/LoginButton/LoginButton'
import Navigation from '../../compositions/Navigation/Navigation'

import './App.css'

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
