import React from 'react'

const contactDetailsMarkup = (contactDetails = {}, handler = () => {}) => {
    const {
        contactName,
        contactEmail,
        contactPhone
    } = contactDetails
    return (
        <section className='contact-details'>
            <h3>Spotter Contact</h3>
            <label htmlFor='contactName'>Name</label>
            <input onChange={handler} type='text' value={ contactName } name='contactName' id='contactName'/>
            <label htmlFor='contactEmail'>Email</label>
            <input onChange={handler} type='email' value={ contactEmail } name='contactEmail' id='contactEmail'/>
            <label htmlFor='contactPhone'>Phone</label>
            <input onChange={handler} type='tel' value={ contactPhone } name='contactPhone' id='contactPhone'/>
        </section>
    )
}

export {
    contactDetailsMarkup
}