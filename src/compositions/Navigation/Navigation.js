import React, { useState, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginComponent from '../Login/LoginComponent'
import MainContainer from '../../containers/MainContainer/MainContainer'
import AdminContainer from '../../containers/AdminContainer/AdminContainer'
import PostContext from '../../context/PostContext'

require('./Navigation.css');

function NavigationComponent (props) {
    const [ post, setPost ] = useState({post: ''})
    const postContext = useContext(PostContext)

    postContext.Provider = {
        post: post,
        updateSelectedPost: (post) => {
            setPost({post})
        }
    }

    return (
        <div>
            <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={MainContainer}/>
                    <Route path='/login' component={LoginComponent}/>
                    <Route path='/admin:id' post={post} component={AdminContainer}/>
                </Switch>

            </div>
            </BrowserRouter>

        </div>
    );

}

export default NavigationComponent
