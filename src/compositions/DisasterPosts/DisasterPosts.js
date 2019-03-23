import React, { useState } from 'react'

import DisasterPostDetails from '../DisasterPosDetails/DisasterPostDetails'
import DisasterModalPostDetails from '../DisasterModalPostDetails/DisasterModalPostDetails'

import './DisasterPosts.css'

// class DisasterPosts extends Component {
//     state = {
//         showModal: false,
//         selectedPost: null,
//     }

//     openPostModal = (post) => {
//         this.setState(previousState => {
//             return {
//                 ...previousState,
//                 showModal: true,
//                 selectedPost: post,
//             }
//         })
//     }
    
//     postsMockup = (posts) => {
//         return posts.map( (post, index) => {
//             return <DisasterPostDetails post={post} keyIndex={index} openPostModal={this.openPostModal} />;
//         })
//     }

//     dismissModal = (e) => {
//         e.preventDefault()
//         this.setState(prevState => {
//             return {
//                 ...prevState,
//                 showModal: false,
//                 selectedPost: null,
//             }
//         })
//     }

//     getModalDetails = () => {
//         return <DisasterModalPostDetails
//                 selectedPost={this.state.selectedPost}
//                 handleSelectPost={this.props.handleSelectPost}
//                 dismissModal={this.props.dismissModal} />
//     }

//     render() {
//         const modalDetails = this.state.showModal ? this.getModalDetails() : null
//         const backdrop = this.state.showModal ? <div className='backdrop' onClick={ this.dismissModal }></div> : null
//         const posts = this.postsMockup(this.props.posts)
//         return (
//             <div className='DisasterPosts'>
//                 { backdrop }
//                 { modalDetails }
//                 <section className='posts-list-container'>
//                     { posts }
//                 </section>
//             </div>
//         );
//     }
// }

// export default DisasterPosts

function DisasterPosts(props) {
    const defaultState = {
        showModal: false,
        selectedPost: null,
    }
    const [state, setState] = useState(defaultState)

    const openPostModal = (post) => {
        this.setState(previousState => {
            return {
                ...previousState,
                showModal: true,
                selectedPost: post,
            }
        })
    }
    
    const postsMockup = (posts, openPostModal) => {
        return posts.map( (post, index) => {
            return <DisasterPostDetails key={`post-${index}`} post={post} openPostModal={openPostModal} />;
        })
    }

    const dismissModal = (e) => {
        e.preventDefault()
        setState(prevState => {
            return {
                ...prevState,
                showModal: false,
                selectedPost: null,
            }
        })
    }

    const getModalDetails = () => {
        return <DisasterModalPostDetails
                selectedPost={state.selectedPost}
                handleSelectPost={props.handleSelectPost}
                dismissModal={props.dismissModal} />
    }


    const modalDetails = state.showModal ? getModalDetails() : null
    const backdrop = state.showModal ? <div className='backdrop' onClick={ dismissModal }></div> : null
    const posts = postsMockup(props.posts, openPostModal)
    return (
        <div className='DisasterPosts'>
            { backdrop }
            { modalDetails }
            <section className='posts-list-container'>
                { posts }
            </section>
        </div>
    );
    
}

export default DisasterPosts
