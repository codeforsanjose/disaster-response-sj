import React, { Component } from 'react'

import './FEMAChecklist.css'

import { FEMAChecklistMarkup } from './FEMAChecklistMarkup.js'

class FEMAChecklist extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {

        }
    }

    render() {


      const recoveryContent = FEMAChecklistMarkup();

        return (
            <div className='FEMAChecklist'>
                { recoveryContent }
            </div>
        )
    }
}

export default FEMAChecklist
