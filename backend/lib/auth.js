import _ from 'lodash'
import bcrypt from 'bcryptjs'
import passport from 'passport'
import Strategy from 'passport-local'
import { users_db_name } from '../Utilities/API_utilities'

//const FacebookStrategy = require('passport-facebook').Strategy
//const constants = require('../config/projectInfoData.json')
//const secret = require('../config/secret.json')

import { db } from './db' 
// Initialize passport and various login strategies
function init(app) {
    
    // Initialize passport
    app.use(passport.initialize())
    
    // Allow passport to maintain user credentials throughout a session lifetime.
    // See serializeUser() and deserializeUser() methods below.
    // This avoids users from having to login again during the same session.
    // User info is persisted in the req.user object.
    app.use(passport.session())
    
    // Setup 'local' passport strategy. Allows user to login with username/password.
    // https://github.com/jaredhanson/passport-local
    passport.use(new Strategy({
        usernameField: 'email',
        passwordField: 'passphrase'
    },
        function (email, passphrase, done) {
            db.findOne(users_db_name, { email: email }).then(doc => {
                login({ email, passphrase }).then(user => {
                    if (user) {
                        console.log('login response', doc)
                        return done(null, doc[0])
                    }
                    return done(null, false)
                }).catch(error => {
                    console.log('error in local strategy', error)
                    return done(error)
                })
            }).catch(err => {
                console.log('error in login ---->', err)
                return done(err)
            })
            
        }
    ))

    // Setup 'facebook' passport strategy. Allows user to login and signup with facebook.
    // https://github.com/jaredhanson/passport-facebook
    /* 
    passport.use(new FacebookStrategy({
        clientID: process.env.NODE_ENV === 'production' ? constants.facebookAppID : constants.facebookTestAppID,
        clientSecret: process.env.NODE_ENV === 'production' ? secret.facebookAppSecret : secret.facebookTestAppSecret,
        callbackURL: '/api/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'photos', 'email'],
        scope: ['email', 'public_profile']
      },
      (accessToken, refreshToken, profile, cb) => {
            // console.log('>>>>>>>>>>> profile', profile)
            if (!profile.emails || profile.emails.length === 0) {
                return cb('Email is required')
            }
            const email = profile.emails[0].value
            db.findOne('user', { email }).then(user => {
            if (user) {
                // user exists, update profile with facebook data
                db.updateOne('user', { email }, { $set: { name: profile.displayName, facebookId: profile.id } }).then(result => {
                    return cb(null, user)
                }).catch(cb)                
            } else {
                // user doesn't exist, create it
                db.insertOne('user', { name: profile.displayName, email, facebookId: profile.id }).then(result => {
                    const user = result.ops[0];
                    return cb(null, user)
                }).catch(cb)
            }
        }).catch(error => {
            console.log('error in facebook strategy', error)
            return done(error)
        })
      }
    ))
    */

    // Configure Passport authenticated session persistence.
    //
    // In order to restore authentication state across HTTP requests, Passport needs
    // to serialize users into and deserialize users out of the session.  The
    // typical implementation of this is as simple as supplying the user ID when
    // serializing, and querying the user record by ID from the database when
    // deserializing.

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser((_id, done) => {
        db.getById(users_db_name, _id).then(user => {
            done(null, user)
        }).catch(err => {
            console.log('error in deserializeUser', err)
            done(err)
        })
    })
}

function login(credentials) {
    return db.findOne(users_db_name, { email: credentials.email }).then(doc => {
        if (doc) {
            return bcrypt.compare(credentials.passphrase, doc[0].passphrase)
        }
    }).catch(err => {
        console.log('error in login ---->', err)
        return err
    })
}

function isAdmin(req) {
    return _.get(req, 'user.isAdmin')
}

export {
    init,
    isAdmin,
    login,
}
