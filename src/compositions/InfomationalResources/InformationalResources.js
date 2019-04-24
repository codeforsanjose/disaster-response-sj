import React, { Component } from 'react'


import './InformationalResources.css'
import './InformationalResources.js'



class InformationalResources extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {

        }
    }

    render() {

      const resourcesContent = infoResourcesMarkup

        return (
            <div className='InformationalResources'>
                { resourcesContent }
            </div>
        )
    }
}

export default InformationalResources
