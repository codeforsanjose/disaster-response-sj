import React, { Fragment } from 'react'
import { InputField, TextAreaField } from '../../components/FormFields/FormFields'
import './PostMarkup.css' //for tooltips

/**
 * Markup for post information
 *  
 * @param {object}      details 
 * @param {function}    updateHandler
 * @param {boolean}     editMode 
 */
export function InformationMarkup({ details = {}, updateHandler = null, editMode = false }) {
    
    const {
        title,
        description,
        updateItem,
        updates,
    } = details

    const updatesMarkup = (updates && updates.length > 0) ? updates.map( (item, index) => {
        return (
            <span key={`update-item-${index}`} className='update-item'>{ item }</span>
        )
    }) : null

    const addUpdateButton = <button className='update-item-btn' onClick={ updateHandler }>Add</button>

    const editInformationMarkup = (
        <Fragment>
            <InputField 
                name = 'title'
                value = { title }
                type = 'text'
                label = 'Title'
                tooltip = 'Title'
            />
            <TextAreaField 
                name = 'description'
                value = { description }
                type = 'text'
                label = 'Description'
                tooltip = 'Description'
            />
            <div className = 'update-container'>
                <InputField 
                    name = 'updateItem'
                    value = { updateItem }
                    type = 'text'
                    label = 'Updates'
                    required = { false }
                    tooltip = 'Any Updates'
                />
                { updateHandler && addUpdateButton}
                { updatesMarkup }
            </div>
        </Fragment>
    )

    const informationMarkup = (
        <section className='inform-details'>
            <section className='title'>
                <span>{ title }</span>
            </section>
            <section className='description'>
                <span>{ description }</span>
            </section>
            <section className='post-updates'>
                { updatesMarkup }
            </section>
        </section>
    )

    return editMode ? editInformationMarkup : informationMarkup
}

/**
 * Markup for address information
 *  
 * @param {object}      details
 * @param {boolean}     editMode 
 */
export function AddressMarkup({ details = {}, editMode = false }) {
    
    const { 
        addressLine1,
        addressLine2,
        zipcode,
        longitude,
        latitude,
        radius,
    } = details
    
    const editAddressMarkup = (
        <Fragment>
            <InputField 
                name = 'addressLine1'
                value = { addressLine1 }
                type = 'text'
                label = 'Address Line 1'
                tooltip = 'Address Line 1'
            />
            <InputField 
                name = 'addressLine2'
                value = { addressLine2 }
                type = 'email'
                label = 'Address Line 2'
                tooltip = 'Address Line 2'
                required = { false }
            />
            <InputField 
                name = 'zipcode'
                value = { zipcode }
                type = 'tel'
                label = 'Zipcode'
                tooltip = 'Zipcode'
            />
            <InputField 
                name = 'longitude'
                value = { longitude }
                type = 'number'
                label = 'Longitude'
                tooltip = 'Enter number from -118 to -124'
            />
            <InputField 
                name = 'latitude'
                value = { latitude }
                type = 'number'
                label = 'Latitude'
                tooltip = 'Enter number from 34 to 41'
            />
            <InputField 
                name = 'radius'
                value = { radius }
                type = 'number'
                label = 'Radius'
                tooltip = 'Enter number from 0 to 10 (miles)'
            />
        </Fragment>
    )

    const addressMarkup = (
        <section className='address-details'>
            <section>
                <label htmlFor='addressLine1'>Address Line 1:</label>
                <span>{ addressLine1 }</span>
            </section>
            <section>
                <label htmlFor='addressLine2'>Address Line 2:</label>
                <span>{ addressLine2 }</span>
            </section>
            <section>
                <label htmlFor='zipcode'>Zipcode:</label>
                <span>{ zipcode }</span>
            </section>
            <section>
                <label htmlFor='longitude'>Longitude:</label>
                <span>{ longitude }</span>
            </section>
            <section>
                <label htmlFor='latitude'>Latitude:</label>
                <span>{ latitude }</span>
            </section>
            <section>
                <label htmlFor='radius'>Radius:</label>
                <span>{ radius }</span>
            </section>
        </section>
    )

    return editMode ? editAddressMarkup : addressMarkup
}

/**
 * Markup for contact information
 *  
 * @param {object}      details
 * @param {boolean}     editMode 
 */
export function ContactMarkup({ details = {}, editMode = false }) {
    
    const {
        contactName,
        contactEmail,
        contactPhone
    } = details

    const editContactMarkup = (
        <Fragment>
            <InputField 
                name = 'contactName'
                value = { contactName }
                type = 'text'
                label = 'Name'
                tooltip = 'Contact Name'
            />
            <InputField 
                name = 'contactEmail'
                value = { contactEmail }
                type = 'email'
                label = 'Email'
                tooltip = 'Contact Email'
            />
            <InputField 
                name = 'contactPhone'
                value = { contactPhone }
                type = 'tel'
                label = 'Phone'
                tooltip = "Contact Phone"
            />
        </Fragment>
    )

    const contactMarkup = (
        <section className='contact-details'>
            <div>
                <label htmlFor='contactName'>Name: </label>
                <span>{ contactName }</span>
            </div>
            <div>
                <label htmlFor='contactEmail'>Email: </label>
                <span >{ contactEmail }</span>
            </div>
            <div>
                <label htmlFor='contactPhone'>Phone: </label>
                <span>{ contactPhone }</span>
            </div>
        </section>
    )

    return editMode ? editContactMarkup : contactMarkup
}