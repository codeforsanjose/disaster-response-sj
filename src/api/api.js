const DefaultHeaders = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
}

const makeRequest = (uploadData, method, path, headers = DefaultHeaders) => {
    if (method === 'GET') {
        return fetch(path, {
            method: method,
            headers: headers,
            credentials: 'include'
        })
    }
    else {
        return fetch(path, {
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

const editPost = (postDetails) => {
    return makeRequest(postDetails, 'PUT', '/api/posts').then(response => {
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
    editPost,
}