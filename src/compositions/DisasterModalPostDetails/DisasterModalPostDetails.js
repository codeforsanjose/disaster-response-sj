import React from 'react'

import { XCircle } from 'react-feather'
import { getAddressMarkup } from '../../components/AddressMarkup/AddressMarkup'
import { contactDetailsMarkup } from '../../components/ContactMarkup/ContactMarkup'
import { postInformationDetails } from '../../compositions/DisasterInformationMarkup/DisasterInformationMarkup'
import MapDisplay from '../../components/MapDisplay/MapDisplay'


export default function DisasterModalPostDetails(props) {
    const post = props.selectedPost

    const markup = contactDetailsMarkup(post)
    const contactDetails = <aside className='contact-details'>
        { markup }
    </aside>
    
    const handler = props.handleSelectPost ? props.handleSelectPost : null
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
    const closeButton = <XCircle size={ 60 } className='close-button' onClick={ props.dismissModal } />
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
