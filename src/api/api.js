const DefaultHeaders = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
}

const makeRequest = (uploadData, method, path, headers = DefaultHeaders) => {
    console.log('make request path', path)
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


const login = (credentials) => {
    return makeRequest(credentials, 'POST', '/api/login').then(response => {
        return response.json()
    }).catch(error => {
        return error
    })
}

export {
    login
}