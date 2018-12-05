import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginComponent from '../Login/LoginComponent'
import MainContainer from '../../containers/MainContainer/MainContainer'

require('./Navigation.css');

class NavigationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={MainContainer}/>
                        <Route path='/login' component={LoginComponent}/>
                    </Switch>

                </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default NavigationComponent
