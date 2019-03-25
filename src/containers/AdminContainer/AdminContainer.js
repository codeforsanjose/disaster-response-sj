import React, { useContext, useState, useEffect } from 'react'
import moment from 'moment'

import PostContext from '../../context/PostContext'
import { createPost, editPost, getPosts, getUser } from '../../api/api'
import DisasterPosts from '../../compositions/DisasterPosts/DisasterPosts'
import AdminForm from '../../compositions/AdminForm/AdminForm'
import { getAddressMarkup } from '../../components/AddressMarkup/AddressMarkup'
import { contactDetailsMarkup } from '../../components/ContactMarkup/ContactMarkup'
import { postInformationDetails } from '../../compositions/DisasterInformationMarkup/DisasterInformationMarkup'
import { validateEmail } from '../../Utilities/validationUtilities'

require('./AdminContainer.css')

function AdminContainer(props) {
    const postContext = useContext(PostContext)
    const state = {
        user: {},
        selectedID: '',
        tabIndex: 0,
        tabs: ['Create Post', 'Update Existing Post'],
    }

    const [adminState, setAdminState] = useState(state)
    
    useEffect(() => {
        if (!adminState.user._id && !adminState.error) {
            const userID = props.match.params.id.split(':')[1]
            getUser(userID)
            .then(response => {
                return response.user
            })
            .then(user => {
                getPosts()
                .then(result => {
                    setAdminState(previousState => {
                        return {
                            ...previousState,
                            user: user,
                            posts: result.length > 0 ? result : []
                        }
                    })
                })
            })
            .catch(error => {
                console.log('Error :: ', error)
                setAdminState({
                    ...adminState,
                    error: error
                });
            });
        }
    })

    const postForEdit = postContext.Provider.post.post
    const isEditMode = postForEdit._id ? true : false
    
    if (adminState.tabIndex !== 0 && postForEdit._id) {
        setAdminState({
            ...adminState,
            postDetails: {
                ...postForEdit
            },
            tabIndex: 0,
        })
    }

    const handleSelect = (event, post) => {
        event.preventDefault()
        postContext.Provider.updateSelectedPost(post)
    }

    const handleNewSubmit = (req, event) => {
        event.preventDefault();

        createPost(req).catch( (error) => {
            console.log('Error creating post', error);
        });
    }

    const handleUpdateSubmit = (req, event) => {
        event.preventDefault();

        editPost(req).catch( (error) => {
            console.log('Error updating post', error);
        });
    }
    
    const manageEmergency = () => {
        const handler = isEditMode ? handleUpdateSubmit : handleNewSubmit

        return (
            <div className='create-post-container'>
                <AdminForm submitHandler = { handler } editMode = { true } />
            </div>
        );
    }

    const showEmergencies = (posts) => {
        return <DisasterPosts handleSelectPost={handleSelect} posts={ posts } />
    }

    const handleTabSelect = (index) => {
        if (index === 0) {
            postContext.Provider.updateSelectedPost({post: {}})
        }
        setAdminState(previousState => {
            return {
                ...previousState,
                tabIndex: index,
            }
        })
    }

    const getActiveTab = (tabIndex, posts) => {
        switch(tabIndex) {
            case 0: {
                return manageEmergency()
            }
            case 1: {
                return showEmergencies(posts)
            }
            default: {
                return manageEmergency()
            }
        }
    }

    if (adminState.user) {
        // Render page if user is logged in, and is an admin
        const { posts, tabs, tabIndex } = adminState
        const adminNavigation = tabs.map( (tab, index) => {
            const active = index === tabIndex ? 'active': ''
            return (
                <span key={`tab-nav-${index}`} onClick={ e => handleTabSelect(index) } className={`tab-item ${active}`}>{ tab }</span>
            )
        })
        const tabNavContainer = (
            <div className='admin-tabs'>
                { adminNavigation }
            </div>
        )
        const activeTab = getActiveTab(tabIndex, posts)
        
        return (
            <div className='AdminContainer'>
                { tabNavContainer }
                { activeTab }
            </div>
        );
    } else {
        // Show error message if user is not an admin
        return (
            <div>
                <p> 403 Error : Restricted Access </p>
            </div>
        );
    }

}

export default AdminContainer
