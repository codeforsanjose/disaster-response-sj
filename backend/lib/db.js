import assert from 'assert'
import { ObjectID, MongoClient } from 'mongodb'

import { MongoDBData } from '../../config/projectInfoData.js'
import { posts_db_name } from '../Utilities/API_utilities'
class DataBase {
    constructor () {
        this.db = {}
        this.url
        this.fieldsWanted = {
            _id: 1,
            date: 1,
            type: 1,
        }
        this.posts_db_name = posts_db_name
        if (process.env.NODE_ENV === 'production') {
            this.url = MongoDBData['mongoData']['productionURL']
        } else {
            this.url = MongoDBData['mongoData']['productionURL']
        }
        MongoClient.connect(this.url, (err, dbParam) => {
            assert.equal(null, err)
            console.log('Successfully connected to MongoDB server. ')
            this.db = dbParam.db('DisasterResponse')
            
            return;
        })
    }

    getAll(collection, sortParam = {}) {
        this.db.collection(collection).find({}).sort(sortParam).toArray((err, result) => {
            if (err) {
                return err
            }
            return result
        })
    }

    getByEmail(collection, email) {
        this.db.collection(collection).find({ email: email.email }).toArray((err, result) => {
            if (err) {
                console.log('getByEmail err', err)
                return err
            }
            if (result.length == 0) {
                return reject('Not found by email')
            }
            return result[0]
        })
    }

    getById(collection, id) {
        this.db.collection(collection).find({ _id: new ObjectID(id) }).toArray((err, result) => {
            if (err) {
                console.log('getById err', err)
                return reject(err)
            }
            return resolve(result[0])
        })
    }

    insertOne(collection, obj) {
        this.db.collection(collection).insertOne(obj, (err, result) => {
            if (err) {
                console.log('insertOne err', err)
                return reject(err)
            }
            return resolve(result)
        })
    }

    updateOneById(collection, obj) {
        const query = { '_id': ObjectID(obj._id) }
        obj._id = ObjectID(obj._id)
        this.db.collection(collection).updateOne(query, obj, (err, result) => {
            if (err) {
                console.log('updateOneById err', err)
                return reject(err)
            }
            return resolve(result)
        })
    }

    deleteOne(collection, id) {
        const query = { '_id': ObjectID(id) }
        this.db.collection(collection).deleteOne(query, (err, result) => {
            if (err) {
                console.log('deleted err', err)
                return reject(err)
            }
            return resolve(result)
        })
    }

    updateOne(collection, query, obj) {
        this.db.collection(collection).updateOne(query, obj, (err, result) => {
            if (err) {
                console.log('updateOne err', err)
                return reject(err)
            }
            return resolve(result)
        })
    }

    findAll(collection, query) {
        this.db.collection(collection).find(query, this.fieldsWanted).sort({date: -1}).toArray((err, result) => {
            if (err) {
                console.log('err', err)
                return reject(err)
            }
            return resolve(result)
        })
    }
    findOne(collection, query) {
        this.db.collection(collection).find(query).toArray((err, result) => {
            if (err) {
                console.log('err', err)
                return reject(err)
            }
            return resolve(result[0])
        })
    }
}

export const db = new DataBase()
