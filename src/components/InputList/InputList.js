import React from 'react'

import './InputList.css'

export default function InputList({name, details = [], handler = () => {}, errors = {}, editMode}) {

    const editFields = details.map((detail) =>
        <section key = { detail.name } className = "inputList-group">
            <label htmlFor = { detail.name }>{ detail.text }</label>
            <input onChange = { handler }
                         id = { detail.name }
                       name = { detail.name }
                      value = { detail.value }
                       type = { detail.type }>
            </input>
        </section>
    );

    const viewFields = details.map((detail) =>
        <section>
            <label htmlFor = { detail.name }>{ detail.text }</label>
            <span>{ detail.value }</span>
        </section>
    );

    return (
        <section className = {[ name, "inputList" ]}>
            { editMode ? editFields : viewFields }
        </section>
    );
}