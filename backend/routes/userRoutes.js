import { Router } from 'express'
import { db } from '../lib/db'
import { users_db_name } from '../Utilities/API_utilities'


const usersRouter = Router()


usersRouter.post('/api/user', (req, res) => {
    // It is good practice to specifically pick the fields we want to insert here *in the backend*,
    // even if we have already done so on the front end. This is to prevent malicious users
    // from adding unexpected fields by modifying the front end JS in the browser.
    var newUser =  _.pick(req.body, [
        'name', 'email', 'phone', 'passphrase'])
    createNewUser(newUser).then(result => {
        return res.json(result)
    }).catch(error => {
        console.log(error)
        return res.status(522).json(error)
    })
})

usersRouter.get('/api/user/:id', (req, res) => {
    db.getById('users', req.params.id).then(user => {
        delete user.passphrase
        req.user = user[0]
        return res.json({ user: user[0] })
    })
    //TODO Check why we need this. An Admin should be able to view anyone's profile
    // if (req.user) {
    //     var user = req.user
    //     return res.json({ user });
    // }
    // if (auth.isAdmin(req) || (req.isAuthenticated() && req.params.id === req.user._id.toString())) {
        // db.getById('user', req.params.id).then(user => {
        //     delete user.passphrase
        //     req.user = user
        //     return res.json({ user })
        // })
    // } else {
    //     return res.status(403).json({ error: 'You do not have permission to access this resource.' })
    // }
})

const createNewUser = (newUser) => {
    return bcrypt.hash(newUser.passphrase, 10, (err, hash) => {
        newUser.passphrase = hash
        return db.insertOne(users_db_name, newUser)
    })
}

export {
    usersRouter
}