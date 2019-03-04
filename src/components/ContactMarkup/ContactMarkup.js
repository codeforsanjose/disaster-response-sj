import React from 'react'

import './ContactMarkup.css'

const contactDetailsMarkup = (contactDetails = {}, handler = () => {}, editMode = false) => {
    const {
        contactName,
        contactEmail,
        contactPhone
    } = contactDetails

    const editContactMarkup = (
        <section className='contact-details'>
            <section>
                <label htmlFor='contactName'>Name: </label>
                <input onChange={handler} type='text' value={ contactName } name='contactName' id='contactName'/>
            </section>
            <section>
                <label htmlFor='contactEmail'>Email: </label>
                <input onChange={handler} type='email' value={ contactEmail } name='contactEmail' id='contactEmail'/>
            </section>
            <section>
                <label htmlFor='contactPhone'>Phone: </label>
                <input onChange={handler} type='tel' value={ contactPhone } name='contactPhone' id='contactPhone'/>
            </section>
        </section>
    )
    const contactMarkup = (
        <section className='contact-details'>
            <section>
                <label htmlFor='contactName'>Name: </label>
                <span>{ contactName }</span>
            </section>
            <section>
                <label htmlFor='contactEmail'>Email: </label>
                <span >{ contactEmail }</span>
            </section>
            <section>
                <label htmlFor='contactPhone'>Phone: </label>
                <span>{ contactPhone }</span>
            </section>
        </section>
    )
    return editMode ? editContactMarkup : contactMarkup
}



export {
    contactDetailsMarkup
}