import assert from 'assert'
import { ObjectID, MongoClient } from 'mongodb'

import { MongoDBData } from '../config/projectInfoData.js'

class DataBase {
    constructor () {
        this.db = {}
        this.url
        this.fieldsWanted = {
            _id: 1,
            date: 1,
            type: 1,
        }
        this.posts_db_name = ''
        if (process.env.NODE_ENV === 'production') {
            this.url = MongoDBData['mongoData']['productionURL']
            this.posts_db_name = 'disasters'
        } else {
            this.url = MongoDBData['mongoData']['productionURL']
            this.posts_db_name = 'test_disasters'
        }
        MongoClient.connect(this.url, (err, dbParam) => {
            assert.equal(null, err)
            console.log('Successfully connected to MongoDB server. ')
            this.db = dbParam
            
            return;
        })

    }

    getAll(collection, sortParam = {}) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).find({}).sort(sortParam).toArray((err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }

    getByEmail(collection, email) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).find({ email: email.email }).toArray((err, result) => {
                if (err) {
                    console.log('getByEmail err', err)
                    return reject(err)
                }
                if (result.length == 0) {
                    return reject('Not found by email')
                }
                return resolve(result[0])
            })
        })
    }

    getById(collection, id) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).find({ _id: new ObjectID(id) }).toArray((err, result) => {
                if (err) {
                    console.log('getById err', err)
                    return reject(err)
                }
                return resolve(result[0])
            })
        })
    }

    insertOne(collection, obj) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).insertOne(obj, (err, result) => {
                if (err) {
                    console.log('insertOne err', err)
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }

    updateOneById(collection, obj) {
        return new Promise((resolve, reject) => {
            const query = { '_id': ObjectID(obj._id) }
            obj._id = ObjectID(obj._id)
            this.db.collection(collection).updateOne(query, obj, (err, result) => {
                if (err) {
                    console.log('updateOneById err', err)
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }

    deleteOne(collection, id) {
        return new Promise((resolve, reject) => {
            const query = { '_id': ObjectID(id) }
            this.db.collection(collection).deleteOne(query, (err, result) => {
                if (err) {
                    console.log('deleted err', err)
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }

    updateOne(collection, query, obj) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).updateOne(query, obj, (err, result) => {
                if (err) {
                    console.log('updateOne err', err)
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }

    findAll(collection, query) {
        return new Promise((resolve, reject) => {
            
            this.db.collection(collection).find(query, this.fieldsWanted).sort({date: -1}).toArray((err, result) => {
                if (err) {
                    console.log('err', err)
                    return reject(err)
                }
                return resolve(result)
            })
        })
    
    }
    findOne(collection, query) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).find(query).toArray((err, result) => {
                if (err) {
                    console.log('err', err)
                    return reject(err)
                }
                return resolve(result[0])
            })
        })
    }
}

//module.exports = new DataBase()
export const db = new DataBase()
