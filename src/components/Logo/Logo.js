import React, { Fragment } from 'react'
import logoImg from './logo-dark-bg-web.png'

import './Logo.css'

const CONSTANTS = {
  alt: 'Disaster Response San Jose Logo',
  title: 'Disaster Response SJ - Homepage'
}

export function Logo() {
        const homeURL = window.location.origin.toString()

        return (
          <Fragment>
            <div className="logoContainer">
                <a href={ homeURL }>
                  <img className="logo"
                        src={ logoImg }
                        alt={ CONSTANTS.alt }
                        title= { CONSTANTS.title } />
                </a>
            </div>
          </Fragment>
        )
}
