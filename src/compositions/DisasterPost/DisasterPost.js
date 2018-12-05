import React, { Component } from 'react'
import './DisasterPost.css'

class DisasterPost extends Component {
    postsMockup = (posts) => {
        return posts.map( (post, index) => {
            const { title,
                    description,
                    updates,
                    contactName,
                    contactEmail,
                    contactPhone } = post

            const contactDetailsMarkup = <aside className='contact-details'>
                <h4>{ contactName }</h4>
                <h4>{ contactPhone }</h4>
                <h4>{ contactEmail }</h4>
            </aside>
            const updatesMarkup = updates.map(updateText => {
                return (
                    <h6>- { updateText }</h6>
                )
            })
            return (
                <div key={ `${title}-${index}` } className='post-details'>
                    <h4>{ title }</h4>
                    <h6>{ description }</h6>
                    <aside className='updates-list'>
                        { updatesMarkup }
                    </aside>
                    { contactDetailsMarkup }
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
