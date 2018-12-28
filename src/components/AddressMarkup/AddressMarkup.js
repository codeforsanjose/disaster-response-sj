import React from 'react'

const getAddressMarkup = (addressDetails = {}, handler = () => {}) => {
    const { 
        addressLine1,
        addressLine2,
        zipcode,
        longitude,
        latitude,
    } = addressDetails
    return (
        <section className='address-details'>
            <h3>Address of Disaster</h3>
            <label htmlFor='addressLine1'>Address Line 1:</label>
            <input onChange={handler} value={ addressLine1 } type='text' name='addressLine1' id='addressLine1'/>
            <label htmlFor='addressLine2'>Address Line 2:</label>
            <input onChange={handler} value={ addressLine2 } type='text' name='addressLine2' id='addressLine2'/>
            <label htmlFor='zipcode'>Zipcode:</label>
            <input onChange={handler} value={ zipcode } type='text' name='zipcode' id='zipcode'/>
            <label htmlFor='longitude'>longitude:</label>
            <input onChange={handler} value={ longitude } type='number' name='longitude' id='longitude'/>
            <label htmlFor='latitude'>Latitude:</label>
            <input onChange={handler} value={ latitude } type='number' name='latitude' id='latitude'/>
        </section>
    )
}

export {
    getAddressMarkup
}