import React from 'react'
import moment from 'moment'
import { createPost, getPosts, getUser } from '../../api/api'
import DisasterPosts from '../../compositions/DisasterPosts/DisasterPosts'
import { getAddressMarkup } from '../../components/AddressMarkup/AddressMarkup'
import { contactDetailsMarkup } from '../../components/ContactMarkup/ContactMarkup'
import { postInformationDetails } from '../../compositions/DisasterInformationMarkup/DisasterInformationMarkup'

require('./AdminContainer.css')

class AdminContainer extends React.Component {
    state = {
        title: '',
        description: '',
        updates: [],
        updateItem: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        longitude: '',
        latitude:'',
        update: '',
        selectedID: '',
        tabIndex: 0,
        tabs: ['Create Post', 'Update Existing Post'],
    }

    static getDerivedStateFromProps(props, state) {
        const userID = props.match.params.id.split(':')[1]
        const newState = {
            ...state,
            userID: userID,
        }
        return newState
    }

    componentDidMount() {
        getUser(this.state.userID)
        .then(response => {
            return response.user
        })
        .then(user => {
            getPosts()
            .then(result => {
                this.setState(previousState => {
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
            this.setState({
                ...this.state,
                error: error
            });
        });
    }

    handleInputChange = (event) => {
        event.preventDefault()
        const val = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: val,
        });
    }

    handleAddUpdateItem = (event, item) => {
        event.preventDefault()
        const timestamp = moment().format('MMM D, YYYY : HH:mm:ss')
        const updatedItem = `${timestamp} - ${this.state.updateItem}`
        const updateItems = this.state.updateItem !== '' 
            ? [...this.state.updates, updatedItem]
            : this.state.updates

        this.setState({
            ...this.state,
            updateItem: '',
            updates: updateItems,
        });
    }

    handleSelect = (event) => {
        this.setState({
            selectedID: event.target.value
        })
    }

    handleSelectPost = () => {
        this.toggleUpdateEmergency();
    }

    handleNewSubmit = (event) => {
        event.preventDefault();

        const req = {
            title: this.state.title,
            description: this.state.description,
            contactName: this.state.contactName,
            contactEmail: this.state.contactEmail,
            contactPhone: this.state.contactPhone,
            updates: this.state.updates,
            updateItem: this.state.updateItem,
            longitude: this.state.longitude,
            latitude: this.state.latitude,
            addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2,
            zipcode: this.state.zipcode,
        }

        createPost(req).catch( (error) => {
            console.log('Error creating post', error);
        });
    }

    handleUpdateSubmit = (event, post) => {
        event.preventDefault();

        // TODO : Figure out update API

        const req = {
            id: this.state.selectedID,
            update: this.state.update,
        }

        // createPost(req).catch( (error) => {
        //     console.log('Error creating post', error);
        // });
    }
    
    showNewEmergency = () => {
        const addressMarkup = getAddressMarkup({}, this.handleInputChange, true)

        const contactData = {
            contactEmail: this.state.contactEmail,
            contactName: this.state.contactName,
            contactPhone: this.state.contactPhone,
        }

        const contactMarkup = contactDetailsMarkup(this.state, this.handleInputChange, true)
        const infoMarkup = postInformationDetails(this.state, this.handleInputChange, this.handleAddUpdateItem, true)
        return (
            <div className='create-post-container'>
                { infoMarkup }
                { addressMarkup }
                { contactMarkup }
                <hr />
                <button className='submit-post' onClick={this.handleNewSubmit}>Submit</button>
            </div>
        );
    }

    showEmergencies = (posts) => {
        const handlers = {
            handleInputChange: this.handleInputChange,
            handleAddUpdateItem: this.handleAddUpdateItem,
            handleUpdateSubmit: this.handleUpdateSubmit,

        }
        return (
            <div>
                <DisasterPosts edit={ true } handlers={ handlers } posts={ posts } />
            </div>
        );
    }

    showUpdateEmergency = () => {
        return (
            <div>
                <p>Update an existing emergency.</p>
                <div>
                    <div class='input-group'>
                        <label htmlFor='update'>Update</label>
                        <input type='text' name='update' id='update'/>
                    </div>
                    <button onClick={this.handleUpdateSubmit}>Submit</button>
                </div>
            </div>
        );
    }

    handleTabSelect = (index) => {
        this.setState(previousState => {
            return {
                ...previousState,
                tabIndex: index,
            }
        })
    }

    getActiveTab = (tabIndex, posts) => {
        switch(tabIndex) {
            case 0: {
                return this.showNewEmergency()
            }
            case 1: {
                return this.showEmergencies(posts)
            }
            default: {
                return this.showNewEmergency()
            }
        }
    }

    render() {
        if (this.state.user) {
            // Render page if user is logged in, and is an admin
            const { posts, tabs, tabIndex } = this.state
            const adminNavigation = tabs.map( (tab, index) => {
                const active = index === tabIndex ? 'active': ''
                return (
                    <span key={`tab-nav-${index}`} onClick={ e => this.handleTabSelect(index) } className={`tab-item ${active}`}>{ tab }</span>
                )
            })
            const tabNavContainer = (
                <div className='admin-tabs'>
                    { adminNavigation }
                </div>
            )
            let activeTab = this.getActiveTab(tabIndex, posts)
            
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
}

export default AdminContainer
