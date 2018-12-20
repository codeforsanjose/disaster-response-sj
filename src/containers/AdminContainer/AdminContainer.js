import React from 'react';
import { createPost, getPosts, getUser } from '../../api/api';

require('./AdminContainer.css');

class AdminContainer extends React.Component {

    state = {
        title: '',
        description: '',
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
        getUser(this.state.userID).then(response => {
            if (response['error']) {
                console.log('Error in response :: ', response['error'])
                this.setState({
                    ...this.state,
                    error: response['error']
                });
            }
            else {
                this.setState({
                    ...this.state,
                    user: response.user
                });
            }
        }).catch(error => {
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
        const val = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: val,
        });
    }

    handleSelect = (event) => {
        this.setState({
            selectedID: event.target.value
        });
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

    showNewEmergency = () => {
        return (
            <div>
                <p>Report a new emergency. Make sure all details are correct before publishing.</p>
                <div>
                    <div class="inputGroup">
                        <label for="title">Title</label>
                        <input type="text" name="title" id="title"/>
                    </div>
                    <div class="inputGroup">
                        <label for="description">Description</label>
                        <input type="text" name="description" id="description"/>
                    </div>
                    <div class="inputGroup">
                        <label for="contactName">Contact Name</label>
                        <input type="text" name="contactName" id="contactName"/>
                    </div>
                    <div class="inputGroup">
                        <label for="contactEmail">Contact Email</label>
                        <input type="email" name="contactEmail" id="contactEmail"/>
                    </div>
                    <div class="inputGroup">
                        <label for="contactPhone">Contact Phone</label>
                        <input type="tel" name="contactPhone" id="contactPhone"/>
                    </div>
                    <button onClick={this.handleNewSubmit}>Submit</button>
                </div>
            </div>
        );
    }

    showEmergencies = () => {
        const posts = getPosts();

        // TODO : Ensure that each post has an ID that we can use to get single
        // post from server, as well as update that post
        
        const postList = posts.map((post, index) => {
            return (
                <div class="input-group input-radio-group">
                    <input type="radio" name={`post-${index}`} id={`post-${index}`} value={`${post.id}`} onChange={this.handleSelect}/>
                    <label for={`post-${index}`}>post.title</label>
                </div>
            );
        })

        return (

            <div>
                { postList }
                <button onClick={this.handleSelectPost}>Go</button>
            </div>

        );
    }

    showUpdateEmergency = () => {
        return (
            <div>
                <p>Update an existing emergency.</p>
                <div>
                    <div class="input-group">
                        <label for="update">Update</label>
                        <input type="text" name="update" id="update"/>
                    </div>
                    <button onClick={this.handleUpdateSubmit}>Submit</button>
                </div>
            </div>
        );
    }

    render() {
        if (this.state.user) {
            // Render page if user is logged in, and is an admin
            return (
                <div>
                    <p>Either create a new emergency, or update an existing emergency</p>
                    <div>
                        <button onClick={this.toggleCreateNewEmergency}>Create New Emergency</button>
                        <button onClick={this.toggleShowEmergencies}>Update Emergency</button>
                    </div>
                    <div>
                        {this.state.createEmergency && this.showNewEmergency}
                        {this.state.showEmergencies && this.showEmergencies}
                        {this.state.updateEmergency && this.showUpdateEmergency}
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
