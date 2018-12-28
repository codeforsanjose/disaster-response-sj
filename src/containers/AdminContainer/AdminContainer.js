import React from 'react'
import moment from 'moment'
import { createPost, getPosts, getUser } from '../../api/api'
import DisasterPosts from '../../compositions/DisasterPosts/DisasterPosts'

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
        update: '',
        selectedID: '',
        createEmergency: false,
        showEmergencies: false,
        updateEmergency: false,
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

    toggleCreateNewEmergency = () => {
        this.setState({
            createEmergency: true,
            updateEmergency: false,
            showEmergencies: false,
        });
    }
    
    toggleShowEmergencies = () => {
        this.setState({
            createEmergency: false,
            updateEmergency: false,
            showEmergencies: true,
        });
    }

    toggleUpdateEmergency = () => {
        this.setState({
            createEmergency: false,
            updateEmergency: true,
            showEmergencies: false,
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

    handleAddUpdateItem = (event) => {
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

    handleUpdatesField = (event) => {
        event.preventDefault()
        const val = event.target.value;
        this.setState({
            updateItem: val,
        })
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
            logitude: this.state.logitude,
            latitude: this.state.latitude,
            addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2,
            zipcode: this.state.zipcode,
        }
        createPost(req).catch( (error) => {
            console.log('Error creating post', error);
        });
    }

    handleUpdateSubmit = (event) => {
        event.preventDefault();

        // TODO : Figure out update API

        const req = {
            id: this.state.selectedID,
            update: this.state.update,
        }

        createPost(req).catch( (error) => {
            console.log('Error creating post', error);
        });
    }

    getAddressMarkup = (addressDetails = {}) => {
        return (
            <section class='address-details'>
                <h3>Address of Disaster</h3>
                <label htmlFor='addressLine1'>Address Line 1:</label>
                <input onChange={this.handleInputChange} type='text' name='addressLine1' id='addressLine1'/>
                <label htmlFor='addressLine2'>Address Line 2:</label>
                <input onChange={this.handleInputChange} type='text' name='addressLine2' id='addressLine2'/>
                <label htmlFor='zipcode'>Zipcode:</label>
                <input onChange={this.handleInputChange} type='text' name='zipcode' id='zipcode'/>
                <label htmlFor='logitude'>Logitude:</label>
                <input onChange={this.handleInputChange} type='number' name='logitude' id='logitude'/>
                <label htmlFor='latitude'>Latitude:</label>
                <input onChange={this.handleInputChange} type='number' name='latitude' id='latitude'/>
            </section>
        )
    }
    contactDetailsMarkup = (contactDetails = {}) => {
        return (
            <section className='contact-details'>
                <h3>Spotter Contact</h3>
                <label htmlFor='contactName'>Name</label>
                <input onChange={this.handleInputChange} type='text' name='contactName' id='contactName'/>
                <label htmlFor='contactEmail'>Email</label>
                <input onChange={this.handleInputChange} type='email' name='contactEmail' id='contactEmail'/>
                <label htmlFor='contactPhone'>Phone</label>
                <input onChange={this.handleInputChange} type='tel' name='contactPhone' id='contactPhone'/>
            </section>
        )
    }
    
    postInformationDetails = (informDetails = {}) => {
        const updatesMarkup = this.state.updates.length > 0
            ? this.state.updates.map(item => {
                return (
                    <span className='update-item'>{ item }</span>
                )
            })
            : null
        return (
            <section className='inform-details'>
                <label htmlFor='title'>Title</label>
                <input onChange={this.handleInputChange} type='text' name='title' id='title'/>
                <label htmlFor='description'>Description</label>
                <textarea onChange={this.handleInputChange} type='text' name='description' id='description'></textarea>
                <label htmlFor='updates'>Notes</label>
                <input onChange={this.handleUpdatesField} type='text' name='updates' id='updates'/>
                <button className='add-update-item' onClick={ this.handleAddUpdateItem }>+</button>
                { updatesMarkup }
            </section>
        )
    }
    showNewEmergency = () => {
        const addressMarkup = this.getAddressMarkup()
        const contactMarkup = this.contactDetailsMarkup()
        const infoMarkup = this.postInformationDetails()
        return (
            <div className='create-post-container'>
                <p>Report a new emergency. Make sure all details are correct before publishing.</p>
                { infoMarkup }
                { addressMarkup }
                { contactMarkup }
                <button onClick={this.handleNewSubmit}>Submit</button>
            </div>
        );
    }

    showEmergencies = () => {
        const { posts } = this.state

        // TODO : Ensure that each post has an ID that we can use to get single
        // post from server, as well as update that post
        
        const postList = posts.map((post, index) => {
            return (
                <div key={`post-edit-${index}`} className='input-group input-radio-group'>
                    
                    { post.title }
                </div>
            );
        })

        return (

            <div>
                <DisasterPosts posts={ posts } />
                <button onClick={this.handleSelectPost}>Go</button>
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

    render() {
        if (this.state.user) {
            // Render page if user is logged in, and is an admin
            const newEmergencyMockup = this.state.createEmergency ? this.showNewEmergency() : null
            const emergencyListMockup = this.state.showEmergencies ? this.showEmergencies() : null
            const updateEmergencyMockup = this.state.updateEmergency ? this.showUpdateEmergency() : null
            return (
                <div className='AdminContainer'>
                    <div className='admin-tabs'>
                        <a className='tab-item' onClick={this.toggleCreateNewEmergency}>Create New Emergency</a>
                        <a className='tab-item' onClick={this.toggleShowEmergencies}>Update Emergency</a>
                    </div>
                    <div>
                        { newEmergencyMockup }
                        { emergencyListMockup }
                        { updateEmergencyMockup }
                    </div>
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
