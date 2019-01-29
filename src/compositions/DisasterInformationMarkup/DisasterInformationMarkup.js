import React from 'react'

import './DisasterInformationMarkup.css'

const postInformationDetails = (informDetails = {}, handler = () => {}, buttonHandler = null, edit = false) => {
    const {
        updates,
        updateItem,
        title,
        description,
    } = informDetails

    const updatesMarkup = updates && updates.length > 0
        ? updates.map( (item, index) => {
            return (
                <span key={`update-item-${index}`} className='update-item'>{ item }</span>
            )
        })
        : null

    const updatesAddButtonMarkup = buttonHandler ? <button className='add-update-item' onClick={ buttonHandler }>+</button> : null
    
    const editPostDetailsMarkup = (
        <section className='inform-details'>
            <section className='title'>
                <label htmlFor='title'>title:</label>
                <input onChange={handler} value={ title } type='text' name='title' id='title'/>
            </section>
            <section className='description'>
                <label htmlFor='description'>Description:</label>
                <textarea onChange={handler} value={ description } type='text' name='description' id='description'></textarea>
            </section>
            <section className='post-updates'>
                <label htmlFor='updateItem'>Notes</label>
                { updatesAddButtonMarkup }
                <input onChange={handler} value = { updateItem } type='text' name='updateItem' id='updateItem'/>
                { updatesMarkup }
            </section>
            
        </section>
    )

    const postDetailsMarkup = (
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
    const markup = edit ? editPostDetailsMarkup : postDetailsMarkup
    return (
        <section className='PostInformationDetails'>
            { markup }
        </section>
    )
}

export {
    postInformationDetails
}
