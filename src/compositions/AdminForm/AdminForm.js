import React, { useContext, useState, useReducer } from 'react'
import _ from 'lodash'
import moment from 'moment'
import PostContext from '../../context/PostContext'
import FormContext from '../../context/FormContext'
import { AddressMarkup, ContactMarkup, InformationMarkup } from '../PostMarkup/PostMarkup'
import { validateEmail } from '../../Utilities/validationUtilities'

import './AdminForm.css'

/**
 *  Form used in admin view to update or add new post information
 *  
 *  @param {string}     submitName          form button label
 *  @param {function}   submitHandler       form submit action
 */
export default function AdminForm({ submitName, submitHandler = () => {} }) {
    
    // state hooks + reducers

    const state = {
        fields: {
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

    const errorReducer = (state, {type, name, message}) => {
        switch (type)
        {
            // Add error name and message to state
            // {} => {foo: An error occurred with foo}
            case 'add':     return _.assign(state, { [name] : message })

            // Remove error with name from state
            // {foo : ... } => {}
            case 'remove':  return _.omit(state, name)

            // Do nothing if type not specified
            default:        return state
        }
    }

    const [fields, setFields] = useState(state.fields)
    const [errors, setErrors] = useReducer(errorReducer, state.errors)

    // context handling
    const formContext = useContext(FormContext)

    formContext.Provider = {
        errors: errors,
        inputHandler: (event) => {
            handleInput(event)
        },
        errorHandler: (event) => {
            handleError(event)
        },
        focusHandler: (event) => {
            setErrors({ type: 'remove', name: event.target.name, message: null })
        }
    }

    const postContext = useContext(PostContext)
    const postForEdit = postContext.Provider.post.post

    if (postForEdit && postForEdit._id)
    {
        setFields(postForEdit)
    }

    // form handlers

    const validateField = (fieldName, input) => {

        const sanJoseRegionalPoints = {
            maxLong: -118,
            minLong: -124,
            maxLat: 41,
            minLat: 34,
            maxRadius: 10,
        }

        let message = ""

        // Check for empty entries first
        if (input.length === 0 && (fieldName !== 'updateItem' || fieldName !== 'addressLine2')) 
        {
            message = 'Required'
        }
        else
        {   
            // Other errors
            if (fieldName === 'contactEmail' && validateEmail(input)) 
            {    
                message = 'Invalid email, please re-enter valid email'   
            } 
            else if (fieldName === 'longitude' && (sanJoseRegionalPoints.minLong > input || input > sanJoseRegionalPoints.maxLong))
            {
                message = `Invalid ${ fieldName }, please re-enter valid ${ fieldName } between ${ sanJoseRegionalPoints.minLong } and ${ sanJoseRegionalPoints.maxLong }`
            } 
            else if (fieldName === 'latitude' && (sanJoseRegionalPoints.maxLat < input || input < sanJoseRegionalPoints.minLat)) 
            {
                message = `Invalid ${ fieldName }, please re-enter valid ${ fieldName } between ${ sanJoseRegionalPoints.minLat } and ${ sanJoseRegionalPoints.maxLat }`
            } 
            else if (fieldName === 'radius' && (0 > input || input > sanJoseRegionalPoints.maxRadius)) 
            {
                message = `Invalid ${ fieldName }, please re-enter valid ${ fieldName } between 0 and ${ sanJoseRegionalPoints.maxRadius }`
            }
        }

        return message
    }

    const handleInput = (event) => {
        event.preventDefault()

        const value = event.target.value
        const name = event.target.name

        setFields({
            ...fields,
            [name]: value,
        })
    }

    const handleError = (event) => {
        event.preventDefault()

        const value = event.target.value
        const name = event.target.name
        const errorMessage = validateField(name, value)

        if (errorMessage !== '')
        {
            setErrors({ type: 'add', name: name, message: errorMessage })
        }
        else if (name in errors)
        {
            setErrors({ type: 'remove', name: name, message: null })
        }
    }

    const handleAddUpdateItem = (event) => {
        event.preventDefault()

        if (fields.updateItem !== '')
        {
            // Build update item format
            const timestamp = moment().format('MMM D, YYYY : HH:mm:ss')

            const updatedItem = `${timestamp} - ${fields.updateItem}`
            const updateItems = [...fields.updates, updatedItem]

            setFields({
                ...fields,
                updateItem: '',
                updates: updateItems,
            })
        }
    }

    return (
        <section id = 'adminForm' className = 'formContent'>

            <h3>Disaster Information</h3>

            <InformationMarkup 
                details = { fields }
                updateHandler = { handleAddUpdateItem }
                editMode = { true }
            />

            <div className = 'formAddress'>

                <h3>Disaster Location Details</h3>

                <AddressMarkup 
                    details = { fields }
                    editMode = { true }
                />

            </div>

            <div className = 'formContact'>

                <h3>Emergency Contact Information</h3>

                <ContactMarkup 
                    details = { fields }
                    editMode = { true }
                />

            </div>
            
            <button className = 'formSubmit' disabled = { errors.length > 0 } onClick = { (event) => submitHandler(fields, event) }>
                { submitName }
            </button>
            
        </section>
    )
}

