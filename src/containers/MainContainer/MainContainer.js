import React, { Component } from 'react'

import DisasterPost from '../../compositions/DisasterPost/DisasterPost'
import LoginComponent from '../../compositions/Login/LoginComponent'
import './MainContainer.css'
import { posts } from '../../mockData/Posts'


class MainContainer extends Component {
    render() {
        return (
            <div className='MainContainer'>

                <LoginComponent />
                <DisasterPost posts={ posts } />
            </div>
        );
    }
}

export default MainContainer;
