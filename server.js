
// var express = require('express')
// var bodyParser = require('body-parser')
// var cors = require('cors')
// var bcrypt = require('bcrypt')
// var fs = require('fs')
// var app = express()
// const session = require('express-session')
// const _ = require('lodash')
// const errorHandler = require('errorhandler')
// const passport = require('passport')
// const path = require('path')
// const cookieParser = require('cookie-parser')
// const db = require('./lib/db')
// const auth = require('./lib/auth')
// const pdfCreator = require('./lib/pdfCreator')
// const excelCreator = require('./lib/excelCreator')



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


//const db = require('./lib/db')

const app = express()
const publicDir = __dirname + '/public'

app.use(bodyParser({limit: '4MB'}))
app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);
app.use(cors());  // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use('/public', express.static('public'));
app.use(cookieParser())
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
//auth.init(app)

app.get(['/', '/signup', '/login', '/profile/:id'], (req, res) => {
    res.sendFile(path.join(publicDir, '/index.html'))
})

app.post('/api/login', (req, res, next) => {
    // See: https://github.com/jaredhanson/passport-local
    passport.authenticate('local', (err, user, info) => {
        if (err || !user) {
            console.log('error with login:', err, user)
            return res.status(422).json(err)
        }
        req.login(user, () => {
            return res.json(user)
        })
    })(req, res, next)

})


// POST: create a new meal
app.post('/api/meals', function(req, res) {
    delete req.body['_id']
    db.insertOne(meals_db_name, req.body).then(response => {
        res.status(201).json(response);
    }).catch(error => {
        res.status(406).json({'error': error})
    })
})

// PUT: edit a new meal
app.put('/api/meals', function(req, res) {
    db.updateOneById(meals_db_name, req.body).then(response => {
        res.status(201).json({msg: 'successfully edited report'});
    }).catch(error => {
        console.log('error is', error)
        res.status(406).json({'error': error})
    })
})

app.get('/api/meals/delete/:id', function(req, res) {
    const mealId = req.params.id
    db.deleteOne(meals_db_name, mealId).then(response => {
        res.status(201).json({msg: 'successfully deleted meal report'});
    }).catch(error => {
        console.log('error is', error)
        res.status(406).json({'error': error})
    })
})

app.listen(app.get('port'), function () {
    console.log('[*] mealtally running on port', app.get('port'))
})
