import React, { Component } from 'react'

import { getPosts } from '../../api/api'
import DisasterPost from '../../compositions/DisasterPost/DisasterPost'

import './MainContainer.css'



class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        return getPosts().then(result => {
            this.setState(previousState => {
                return {
                    posts: result
                }
            })
        })
    }

    render() {
        const { posts } = this.state
        return (
            <div className='MainContainer'>
                <DisasterPost posts={ posts } />
            </div>
        );
    }
}

export default MainContainer;
