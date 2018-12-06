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
// const myUser = {
//     email: 'richardson.joseph1990@gmail.com',
//     phone: '5305746483',
//     name: 'Joseph Richardson',
//     passphrase: 'test'
// }
// const registerUser = (newUser) => {
//     const uploadData = {
//         ...newUser
//     }
//     let data = uploadData

//     makeRequest(data, 'POST', '/api/user').then(response => {
//         if (response.status == 422) {
//             return response
//         }
//         else {
//             return response
//         }
//     }).catch(error => {
//         return error
//     })
// }

// const registerTestUser = () => {
//     registerUser(myUser)
// }
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