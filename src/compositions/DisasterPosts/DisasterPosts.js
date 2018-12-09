import React, { Component } from 'react'
import './DisasterPosts.css'

class DisasterPosts extends Component {
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
                    <h6 className='update-text'>- { updateText }</h6>
                )
            })
            return (
                <div key={ `${title}-${index}` } className='post-details'>
                    <aside className='map'>
                        map
                    </aside>
                    <section className='disaster-details'>
                        <h4 className='title'>{ title }</h4>
                        <h6 className='description'>{ description }</h6>
                        <secion className='updates-list'>
                            { updatesMarkup }
                        </secion>
                    </section>
                    { contactDetailsMarkup }
                </div>
            )
        })
    }

    render() {
        const posts = this.postsMockup(this.props.posts)
        return (
            <div className='DisasterPosts'>
                { posts }
            </div>
        );
    }
}

export default DisasterPosts
