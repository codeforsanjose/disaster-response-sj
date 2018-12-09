import React, { Component } from 'react'

import DisasterPosts from '../../compositions/DisasterPosts/DisasterPosts'
import LoginComponent from '../../compositions/Login/LoginComponent'
import './MainContainer.css'
import { posts } from '../../mockData/Posts'


class MainContainer extends Component {
    render() {
        return (
            <div className='MainContainer'>
                <h3>Active Disasters</h3>
                <hr />
                <DisasterPosts posts={ posts } />
            </div>
        );
    }
}

export default MainContainer;
