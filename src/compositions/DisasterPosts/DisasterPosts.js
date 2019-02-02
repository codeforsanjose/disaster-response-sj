import React, { Component } from 'react'
import { XCircle, Map } from 'react-feather'

import { getAddressMarkup } from '../../components/AddressMarkup/AddressMarkup'
import { contactDetailsMarkup } from '../../components/ContactMarkup/ContactMarkup'
import { postInformationDetails } from '../../compositions/DisasterInformationMarkup/DisasterInformationMarkup'

import MapDisplay from '../../components/MapDisplay/MapDisplay'
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
            const {
                title,
            } = post

            const markup = contactDetailsMarkup(post)
            const contactDetails = <aside className='contact-details'>
                { markup }
            </aside>
            
            const addressDetails = getAddressMarkup(post)
            const postInfoMarkup = postInformationDetails(post)
            return (
                <div key={ `${title}-${index}` } className='post-details' onClick={ (e) => this.openPostModal(post) }>
                    <aside className='map'>
                        <Map size={ 100 } />
                        
                        { addressDetails }
                    </aside>
                    <section className='disaster-details'>
                        { postInfoMarkup }
                    </section>
                    { contactDetails }
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
        const post = this.state.selectedPost

        const markup = contactDetailsMarkup(post)
        const contactDetails = <aside className='contact-details'>
            { markup }
        </aside>
        
        const handler = this.props.handleSelectPost ? this.props.handleSelectPost : null
        const editButtonMarkup = handler
            ?   <section>
                    <button onClick={(e) => handler(e, post)}>Edit</button>
                </section>
            :   null
        const addressDetails = getAddressMarkup(post)
        const map = (!(isNaN(post.longitude) && isNaN(post.latitude))) 
            ?   <aside className='map'>
                    <MapDisplay 
                        longitude={post.longitude} 
                        latitude={post.latitude} 
                        radius={post.radius} 
                    />
                    { addressDetails }
                </aside> 
            :   <aside className='map'>
                    { addressDetails }
                </aside>
        const postDetailsMarkup = postInformationDetails(post)
        const closeButton = <XCircle size={ 60 } className='close-button' onClick={ this.dismissModal } />
        return (
            <div className='modal-details'>
                { closeButton }
                { map }
                <section className='disaster-details'>
                    { postDetailsMarkup }
                </section>
                { contactDetails }
                { editButtonMarkup }
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
