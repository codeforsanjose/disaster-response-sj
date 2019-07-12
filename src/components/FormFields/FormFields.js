import React, { Fragment, useContext } from 'react'
import FormContext from '../../context/FormContext'
import './FormFields.css'

/**
 * Helper class for generic form input fields that respond to field validation error handling
 * 
 * @param {string}     name        field name - same as ID
 * @param {any}        value       field value
 * @param {string}     type        field type - text, number, etc.
 * @param {string}     label       field label
 */
export function InputField({ name, value, type, label, required = true }) {

    const formContext = useContext(FormContext)
    const error = (name in formContext.Provider.errors)
    const star = '*'

    return (
        <Fragment>
            <div key = { name } className = "input-group">
                <label htmlFor = { name }>{ label } { required && star }</label>
                { /* Show error if exists */ }
                { error && <span className = "input-error-msg">{ formContext.Provider.errors[name] }</span> }
                <input 
                    onChange = { formContext.Provider.inputHandler }
                    onBlur = { required ? formContext.Provider.errorHandler : () => {} }
                    onFocus = { required ? formContext.Provider.focusHandler : () => {} }
                    id = { name }
                    name = { name }
                    value = { value }
                    type = { type }
                    className = { error ? "input-error" : "" }>
                </input>
            </div>
        </Fragment>
    )
}

/**
 * Helper class for generic form textarea fields that respond to field validation error handling
 * 
 * @param {string}     name        field name - same as ID
 * @param {any}        value       field value
 * @param {string}     type        field type - text, number, etc.
 * @param {string}     label       field label
 */
export function TextAreaField({ name, value, type, label, required = true }) {

    const formContext = useContext(FormContext)
    const error = (name in formContext.Provider.errors)
    const star = '*'

    return (
        <Fragment>
            <div key = { name } className = "input-group">
                <label htmlFor = { name }>{ label } { required && star }</label>
                { /* Show error if exists */ }
                { error && <span className = "input-error-msg">{ formContext.Provider.errors[name] }</span> }
                <textarea 
                    onChange = { formContext.Provider.inputHandler }
                    onBlur = { required ? formContext.Provider.errorHandler : () => {} }
                    onFocus = { required ? formContext.Provider.focusHandler : () => {} }
                    id = { name }
                    name = { name }
                    value = { value }
                    type = { type }
                    className = { error ? "input-error" : "" }>
                </textarea>
            </div>
        </Fragment>
    )
}