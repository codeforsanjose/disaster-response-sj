import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginComponent from '../Login/LoginComponent'
import MainContainer from '../../containers/MainContainer/MainContainer'
import AdminContainer from '../../containers/AdminContainer/AdminContainer'

require('./Navigation.css');

class NavigationComponent extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={MainContainer}/>
                        <Route path='/login' component={LoginComponent}/>
                        <Route path='/admin' component={AdminContainer}/>
                    </Switch>

                </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default NavigationComponent
