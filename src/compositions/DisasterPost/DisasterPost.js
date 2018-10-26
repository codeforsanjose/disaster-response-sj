import React, { Component } from 'react'
import './DisasterPost.css'

class DisasterPost extends Component {
    postsMockup = (posts) => {
        return posts.map( (post, index) => {
            const { title, description, updates } = post
            return (
                <div key={ `${title}-${index}` }>
                    <span>{ title }</span>
                    <span>{ description }</span>
                </div>
            )
        })
    }

    render() {
        const posts = this.postsMockup(this.props.posts)
        return (
            <div className='DisasterPost'>
                <h3>Active Disasters</h3>
                <hr />
                { posts }
            </div>
        );
    }
}

export default DisasterPost
