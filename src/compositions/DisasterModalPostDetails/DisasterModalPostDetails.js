import React from 'react'

import { XCircle } from 'react-feather'
import { AddressMarkup, ContactMarkup, InformationMarkup } from '../PostMarkup/PostMarkup'
import MapDisplay from '../../components/MapDisplay/MapDisplay'

export default function DisasterModalPostDetails(props) {
    const post = props.selectedPost

    const markup = <ContactMarkup details = { post } />
    const contactDetails = <aside className='contact-details'>
        { markup }
    </aside>

    const handler = props.handleSelectPost ? props.handleSelectPost : null
    const editButtonMarkup = handler
        ?   <section>
                <button onClick={(e) => handler(e, post)}>Edit</button>
            </section>
        :   null
    const addressDetails = <AddressMarkup details = { post } />

    const map = (!(isNaN(post.longitude) && isNaN(post.latitude)))
        ?   <aside className='map'>
                <MapDisplay
                    longitude={post.longitude}
                    latitude={post.latitude}
                    radius={post.radius}
                />
            </aside>
        :   <aside className='map'>
            </aside>
    const postDetailsMarkup = <InformationMarkup details = { post } />

    const closeButton = <XCircle size={ 60 } className='close-button' onClick={ props.dismissModal } />

    return (
        <div className='modal-details'>
          <section>
            { map }
            <div className='contact-info'>
              <h4>Contact Details</h4>
              { contactDetails }
            </div>
            { editButtonMarkup }
          </section>
          <section>
            { closeButton }
            <div className='address-info'>
              <h4>Address</h4>
              { addressDetails }
            </div>
            <div className='disaster-details'>
              { postDetailsMarkup }
            </div>
          </section>
        </div>
    )
}
