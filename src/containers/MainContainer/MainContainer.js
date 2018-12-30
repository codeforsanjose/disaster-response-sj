import React, { Component } from 'react'

import DisasterPosts from '../../compositions/DisasterPosts/DisasterPosts'
import { getPosts } from '../../api/api'
import FEMAChecklist from '../../compositions/FEMAChecklist/FEMAChecklist'
import InformationalResources from '../../compositions/InfomationalResources/InformationalResources'

import './MainContainer.css'



class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            posts: [],
            tabIndex: 0,
            tabs: ['Active Disasters', 'Resources', 'FEMA Checklist'],
        }
    }

    componentDidMount() {
        return this.getAllActivePosts()
    }

    getAllActivePosts = () => {
        getPosts().then(result => {
            this.setState(previousState => {
                return {
                    ...previousState,
                    posts: result.length > 0 ? result : []
                }
            })
        })
    }

    handleTabSelect = (index) => {
        this.setState(previousState => {
            return {
                ...previousState,
                tabIndex: index,
            }
        })
    }

    render() {
        const { posts, tabs, tabIndex } = this.state
        const inAppNavigation = tabs.map( (tab, index) => {
            const active = index === tabIndex ? 'active': ''
            return (
                <span key={`tab-nav-${index}`} onClick={ e => this.handleTabSelect(index) } className={`tabItem ${active}`}>{ tab }</span>
            )
        })
        const tabNavContainer = (
            <div className='tabNavContainer'>
                { inAppNavigation }
            </div>
        )
        let activeTab = {}
        switch(tabIndex) {
            case 0: {
                activeTab = <DisasterPosts posts={ posts } />
                break
            }
            case 1: {
                activeTab = <InformationalResources />
                break
            }
            case 2: {
                activeTab = <FEMAChecklist />
                break
            }
            default: {
                activeTab = <DisasterPosts posts={ posts } />
                break
            }
        }
        return (
            <div className='MainContainer'>
                { tabNavContainer }
                <hr />
                { activeTab }
                
            </div>
        )
    }
}

export default MainContainer
