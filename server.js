import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import bcrypt from 'bcrypt'
import fs from 'fs'

import session from 'express-session'
import _ from 'lodash'
import errorHandler from 'errorhandler'
import passport from 'passport'
import path from 'path'
import cookieParser from 'cookie-parser'

import { posts_db_name } from './backend/Utilities/API_utilities'
import { db } from './backend/lib/db'
import { init } from './backend/lib/auth'
import { postsRouter } from './backend/routes/postsRoutes'

const app = express()
const publicDir = __dirname + '/public'

app.use(bodyParser({limit: '4MB'}))
app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080)
app.use(cors())
app.use('/public', express.static('public'))
app.use(cookieParser())
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
app.use(postsRouter)

init(app)

app.get(['/', '/login'], (req, res) => {
    res.sendFile(path.join(publicDir, '/index.html'))
})

app.post('/api/login', (req, res, next) => {
    // See: https://github.com/jaredhanson/passport-local
    passport.authenticate('local', (err, user, info) => {
        console.log('passport auth error', err, 'user', user)
        if (err || !user) {
            console.log('error with login:', err, user)
            return res.status(422).json(err)
        }
        req.login(user, () => {
            return res.json(user)
        })
    })(req, res, next)

})

app.post('/api/user', (req, res) => {
    // It is good practice to specifically pick the fields we want to insert here *in the backend*,
    // even if we have already done so on the front end. This is to prevent malicious users
    // from adding unexpected fields by modifying the front end JS in the browser.
    var newUser =  _.pick(req.body, [
        'name', 'email', 'phone', 'passphrase'])
    createNewUser(newUser).then(result => {
        return res.json(result)
    }).catch(error => {
        console.log(error)
        return res.status(422).json(error)
    })
})

const createNewUser = (newUser) => {
    return new Promise( (resolve, reject) => {
        bcrypt.hash(newUser.passphrase, 10, (err, hash) => {
            newUser.passphrase = hash
            db.insertOne('users', newUser).then(userResult => {
                return resolve(userResult)
            })
            .catch(error => {
                return reject(error)
            })
        })
    
    })
    
}

app.listen(app.get('port'), function () {
    console.log('[*] disaster response running on port', app.get('port'))
})
