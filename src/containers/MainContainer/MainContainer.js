import React, { Component } from 'react'

import DisasterPost from '../../compositions/DisasterPost/DisasterPost'

import './MainContainer.css'
import { posts } from '../../mockData/Posts'


class MainContainer extends Component {
    render() {
        return (
            <div className='MainContainer'>


                <DisasterPost posts={ posts } />
            </div>
        );
    }
}

export default MainContainer;
