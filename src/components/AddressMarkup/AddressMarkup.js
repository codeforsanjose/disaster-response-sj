import React from 'react'

const getAddressMarkup = (addressDetails = {}, handler = () => {}, editMode = false) => {
    const { 
        addressLine1,
        addressLine2,
        zipcode,
        longitude,
        latitude,
        radius,
    } = addressDetails
    const editAddressMarkup = (
        <section className='address-details'>
            <section>
                <label htmlFor='addressLine1'>Address Line 1:</label>
                <input onChange={handler} value={ addressLine1 } type='text' name='addressLine1' id='addressLine1'/>
            </section>
            <section>
                <label htmlFor='addressLine2'>Address Line 2:</label>
                <input onChange={handler} value={ addressLine2 } type='text' name='addressLine2' id='addressLine2'/>
            </section>
            <section>
                <label htmlFor='zipcode'>Zipcode:</label>
                <input onChange={handler} value={ zipcode } type='text' name='zipcode' id='zipcode'/>
            </section>
            <section>
                <label htmlFor='longitude'>Longitude:</label>
                <input onChange={handler} value={ longitude } type='number' name='longitude' id='longitude'/>
            </section>
            <section>
                <label htmlFor='latitude'>Latitude:</label>
                <input onChange={handler} value={ latitude } type='number' name='latitude' id='latitude'/>
            </section>
            <section>
                <label htmlFor='radius'>Radius:</label>
                <input onChange={handler} value={ radius } type='number' name='radius' id='radius'/>
            </section>
        </section>
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

export {
    getAddressMarkup
}