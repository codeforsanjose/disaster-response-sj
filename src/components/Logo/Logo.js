import React, { Fragment } from 'react'
import logoImg from './logo-dark-bg-web.png'

import './Logo.css'

const CONSTANTS = {
  alt: 'Disaster Response San Jose Logo',
  title: 'Disaster Response SJ - Homepage'
}

export function Logo() {
        // the homepage URL to link the logo to for easy user access
        const homeURL = window.location.origin

        return (
          <Fragment>
            <div className="logo">
                <a href={ homeURL }>
                  <img className="logo-img"
                        src={ logoImg }
                        alt={ CONSTANTS.alt }
                        title= { CONSTANTS.title } />
                </a>
            </div>
          </Fragment>
        )
}
