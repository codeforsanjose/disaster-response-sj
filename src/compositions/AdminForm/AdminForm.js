import React, { useState } from 'react'
import moment from 'moment'

import { getAddressMarkup } from '../../components/AddressMarkup/AddressMarkup'
import { contactDetailsMarkup } from '../../components/ContactMarkup/ContactMarkup'
import { postInformationDetails } from '../DisasterInformationMarkup/DisasterInformationMarkup'
import { validateEmail } from '../../Utilities/validationUtilities'
import InputList from '../../components/InputList/InputList'

// import './AdminForm.css'

export default function AdminForm({editMode, submitHandler = () => {}}) {
    
    // State + context setup
    
    const state = {
        form: {
            title: '',
            description: '',
            updates: [],
            updateItem: '',
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            addressLine1: '',
            addressLine2: '',
            zipcode:'',
            longitude: '',
            latitude: '',
            radius: '',
        },
        errors: {},
    }
    const [formState, setFormState] = useState(state.form)
    const [errorState, setErrorState] = useState(state.errors)

    const validateField = (fieldName, input) => {

        const sanJoseRegionalPoints = {
            maxLong: -118,
            minLong: -124,
            maxLat: 41,
            minLat: 34,
            maxRadius: 10,
        }

        let message = "";

        // Check for empty entries first
        if (input.length === 0) 
        {
            message = `Invalid ${ fieldName }, please re-enter valid ${ fieldName }`   
        }

        // Other errors
        if (fieldName === 'email' && validateEmail(input)) 
        {    
            message = 'Invalid email, please re-enter valid email'   
        } 
        else if (fieldName === 'longitude' && (sanJoseRegionalPoints.minLong > input || input > sanJoseRegionalPoints.maxLong))
        {
            message = `Invalid ${ fieldName }, please re-enter valid ${ fieldName } between ${ sanJoseRegionalPoints.maxLong } > ${ fieldName } > ${ sanJoseRegionalPoints.minLong }`
        } 
        else if (fieldName === 'latitude' && (sanJoseRegionalPoints.maxLat < input || input < sanJoseRegionalPoints.minLat)) 
        {
            message = `Invalid ${ fieldName }, please re-enter valid ${ fieldName } between ${ sanJoseRegionalPoints.maxLat } > ${ fieldName } > ${ sanJoseRegionalPoints.minLat }`
        } 
        else if (fieldName === 'radius' && (0 > input || input > sanJoseRegionalPoints.maxRadius)) 
        {
            message = `Invalid ${ fieldName }, please re-enter valid ${ fieldName } between 0 < ${ fieldName } < ${ sanJoseRegionalPoints.maxRadius }`
        }

        return message
    }

    const handleInput = (event) => {
        event.preventDefault()
        const val = event.target.value;
        const name = event.target.name;

        const error = validateField(name, val)

        if (error != '')
        {
            setFormState({
                ...formState,
                [name]: val,
            });
        }
        else
        {
            setErrorState({
                ...errorState,
                [name]: error,
            })
        }
    }

    const handleAddUpdateItem = (event) => {
        event.preventDefault()
        const timestamp = moment().format('MMM D, YYYY : HH:mm:ss')
        const updatedItem = `${timestamp} - ${formState.updateItem}`
        const updateItems = formState.updateItem !== '' 
            ? [...formState.updates, updatedItem]
            : formState.updates

        setFormState({
            ...formState,
            updateItem: '',
            updates: updateItems,
        });
    }

    const addressState = [
        {
            name: "addressLine1",
            text: "Address Line 1",
            type: "text",
            value: formState.addressLine1,
        }, {
            name: "addressLine2",
            text: "Address Line 2",
            type: "text",
            value: formState.addressLine2,
        }, {
            name: "zipcode",
            text: "Zipcode",
            type: "text",
            value: formState.zipcode,
        }, {
            name: "longitude",
            text: "Longitude",
            type: "number",
            value: formState.longitude,
        }, {
            name: "latitude",
            text: "Latitude",
            type: "number",
            value: formState.latitude,
        }, {
            name: "radius",
            text: "Radius",
            type: "number",
            value: formState.radius,
        }
    ]
    
    const contactState = [
        {
            name: "contactName",
            text: "Name",
            type: "text",
            value: formState.contactName,
        }, {
            name: "contactEmail",
            text: "Email",
            type: "email",
            value: formState.contactEmail,
        }, {
            name: "contactPhone",
            text: "Phone",
            type: "tel",
            value: formState.zipcode,
        },
    ]

    const addressList = <InputList name = "admin-address"
                                details = { addressState }
                                handler = { handleInput }
                                 errors = { errorState }
                               editMode = { editMode } /> 

    const contactList = <InputList name = "admin-contact"
                                details = { contactState }
                                handler = { handleInput }
                                 errors = { errorState }
                               editMode = { editMode } /> 

    const buttonLabel = 'Create'
    
    // const addressList = getAddressMarkup(formState, handleInput, true)
    // const contactList = contactDetailsMarkup(formState, handleInput, true)
    const infoList = postInformationDetails(formState, handleInput, handleAddUpdateItem, true)

    return (
        <section>
            { infoList }
            { addressList }
            { contactList }
            <button className = 'submit-post' 
                        disabled = { errorState.length > 0 } 
                        onClick = { (event) => submitHandler(formState, event) }>{ buttonLabel }</button>
        </section>
    );
}