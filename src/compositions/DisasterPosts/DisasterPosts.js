import React, { Component } from 'react'
import { XCircle, Map } from 'react-feather'
import './DisasterPosts.css'

class DisasterPosts extends Component {
    state = {
        showModal: false,
        selectedPost: null,
    }

    openPostModal = (post) => {
        this.setState(previousState => {
            return {
                ...previousState,
                showModal: true,
                selectedPost: post,
            }
        })
    }
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
            const updatesMarkup = updates ? updates.map( (updateText, index) => {
                return (
                    <h6 key={`notes-${index}`} className='update-text'>- { updateText }</h6>
                )
            }) : []
            return (
                <div key={ `${title}-${index}` } className='post-details' onClick={ (e) => this.openPostModal(post) }>
                    <aside className='map'>
                        <Map size={ 100 } />
                    </aside>
                    <section className='disaster-details'>
                        <h4 className='title'>{ title }</h4>
                        <h6 className='description'>{ description }</h6>
                        <section className='updates-list'>
                            { updatesMarkup }
                        </section>
                    </section>
                    { contactDetailsMarkup }
                </div>
            )
        })
    }

    dismissModal = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                ...prevState,
                showModal: false,
                selectedPost: null,
            }
        })
    }

    getModalDetails = () => {
        const { title,
            description,
            updates,
            contactName,
            contactEmail,
            contactPhone } = this.state.selectedPost

        const contactDetailsMarkup = <aside className='contact-details'>
            <h4>{ contactName }</h4>
            <h4>{ contactPhone }</h4>
            <h4>{ contactEmail }</h4>
        </aside>
        const updatesMarkup = updates ? updates.map( (updateText, index) => {
            return (
                <h6 key={`notes-${index}`} className='update-text'>- { updateText }</h6>
            )
        }) : []
        
        const closeButton = <XCircle size={ 60 } className='close-button' onClick={ this.dismissModal } />
        return (
            <div className='modal-details'>
                { closeButton }
                <aside className='map'>
                    <Map size={ 100 } />
                </aside>
                <section className='disaster-details'>
                    <h4 className='title'>{ title }</h4>
                    <h6 className='description'>{ description }</h6>
                    <section className='updates-list'>
                        { updatesMarkup }
                    </section>
                </section>
                { contactDetailsMarkup }
            </div>
        )
    }

    render() {
        const modalDetails = this.state.showModal ? this.getModalDetails() : null
        const backdrop = this.state.showModal ? <div className='backdrop' onClick={ this.dismissModal }></div> : null
        const posts = this.postsMockup(this.props.posts)
        return (
            <div className='DisasterPosts'>
                { backdrop }
                { modalDetails }
                { posts }
            </div>
        );
    }
}

export default DisasterPosts
