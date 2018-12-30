const DefaultHeaders = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
}
const baseURL = process.env.NODE_ENV === 'production'
    ? 'http://disasterresponse-dev.us-west-1.elasticbeanstalk.com'
    : '';


const makeRequest = (uploadData, method, path, headers = DefaultHeaders) => {
    console.log('what is base url', baseURL)
    const fullURL = `${baseURL}${path}`
    console.log('what is fullURL', fullURL)
    if (method === 'GET') {
        return fetch(fullURL, {
            method: method,
            headers: headers,
            credentials: 'include'
        })
    }
    else {
        return fetch(fullURL, {
            method: method,
            headers: headers,
            credentials: 'include',
            body: JSON.stringify(uploadData),
        })
    }
}

const getUser = (id) => {
    return makeRequest(undefined, 'GET', `/api/user/${id}`).then(response => {
        return response.json()
    }).catch(error => {
        window.alert('Error retrieving user')
        console.log(error)
        return error
    })
}

const registerUser = (newUser) => {
    const uploadData = {
        ...newUser
    }
    let data = uploadData

    makeRequest(data, 'POST', '/api/user').then(response => {
        if (response.status === 422) {
            return response
        }
        else {
            return response
        }
    }).catch(error => {
        return error
    })
}

const login = (credentials) => {
    return makeRequest(credentials, 'POST', '/api/login').then(response => {
        return response.json()
    }).catch(error => {
        return error
    })
}

const createPost = (postDetails) => {
    return makeRequest(postDetails, 'POST', '/api/posts').then(response => {
        return response.json()
    }).catch(error => {
        return error
    })
}

const getPosts = () => {
    return makeRequest({}, 'GET', '/api/posts').then(response => {
        return response.json()
    }).catch(error => {
        return error
    })
}

export {
    login,
    getPosts,
    createPost,
    registerUser,
    getUser,
}