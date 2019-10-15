import React, { Fragment } from 'react'

import './LoginButton.css'

const CONSTANTS = {
  loginURL: '/login',
}

export function LoginButton() {

        return (
          <Fragment>
            <div className="login-btn-wrap">
                <a href={ CONSTANTS.loginURL }>
                  <button type="button" className="login-btn">Login</button>
                </a>
            </div>
          </Fragment>
        )
}
