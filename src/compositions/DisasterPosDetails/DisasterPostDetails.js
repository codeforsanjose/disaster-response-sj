import React from 'react'
import { Map } from 'react-feather'

import { getAddressMarkup } from '../../components/AddressMarkup/AddressMarkup'
import { contactDetailsMarkup } from '../../components/ContactMarkup/ContactMarkup'
import { postInformationDetails } from '../../compositions/DisasterInformationMarkup/DisasterInformationMarkup'



export default function DisasterPostDetails(props) {
    const post = props.post
    const {
        title,
    } = post
    const index = props.keyIndex;
    const markup = contactDetailsMarkup(post)
    const contactDetails = <aside className='contact-details'>
        { markup }
    </aside>
    
    const addressDetails = getAddressMarkup(post)
    const postInfoMarkup = postInformationDetails(post)
    return (
        <div key={ `${title}-${index}` } className='post-details' onClick={ (e) => props.openPostModal(post) }>
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
}