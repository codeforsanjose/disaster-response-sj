import React from 'react';
import { isAdmin } from '../../../backend/lib/auth';
import { createPost } from '../../api/api';

require('./AdminContainer.css');

// TODO:
// 
class AdminContainer extends React.Component {

    state = {
        title: '',
        description: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        update: '',
        createEmergency: false,
        updateEmergency: false,
    }

    createNewEmergency = () => {
        this.setState({
            createEmergency: true,
            updateEmergency: false,
        });
    }

    updateEmergency = () => {
        this.setState({
            createEmergency: false,
            updateEmergency: true,
        });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    }

    handleNewSubmit = (event) => {
        const emergency = {
            title: this.state[title],
            description: this.state[description],
            contactName: this.state[contactName],
            contactEmail: this.state[contactEmail],
            contactPhone: this.state[contactPhone],
        }
        createPost(emergency).catch( (error) => {
            console.log('Error creating post', error);
        });

        event.preventDefault();
    }

    handleUpdateSubmit = (event) => {
        createPost(emergency).catch( (error) => {
            console.log('Error creating post', error);
        });
        event.preventDefault();
    }

    showNewEmergency = () => {
        return (
            <div>
                <p>Report a new emergency. Make sure all details are correct before publishing.</p>
                <form onSubmit={this.handleNewSubmit}>
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
                </form>
            </div>
        );
    }

    showEmergencies = () => {
        // TODO : determine how to display all current emergencies, and allow admin
        // to choose one to update
        return (
            <div></div>
        );
    }

    showUpdateEmergency = () => {
        return (
            <div>
                <p>Update an existing emergency.</p>
                <form onSubmit={this.handleUpdateSubmit}>
                    <div class="input-group">
                        <label for="update">Update</label>
                        <input type="text" name="update" id="update"/>
                    </div>
                </form>
            </div>
        );
    }

    render() {
        const newEmergency = this.showNewEmergency();
        const updateEmergency = this.updateEmergency();
        if (this.state.userData && isAdmin(this.state.userData)) {
            // Render page if user is logged in, and is an admin
            return (
                <div>
                    <p>Either create a new emergency, or update an existing emergency</p>
                    <div>
                        <a onClick={this.createNewEmergency}><div>Create New Emergency</div></a>
                        <a onClick={this.updateEmergency}><div>Update Emergency</div></a>
                    </div>
                    <div>
                        {this.state.createEmergency && showNewEmergency}
                        {this.state.updateEmergency && showEmergencies}
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
