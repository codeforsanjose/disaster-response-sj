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
        MongoClient.connect(this.url, { useNewUrlParser: true }, (err, dbParam) => {
            assert.equal(null, err)
            console.log('Successfully connected to MongoDB server. ')
            this.db = dbParam.db('DisasterResponse')
            
            return;
        })
    }

    getAll(collection, sortParam = {}) {
        return this.db.collection(collection).find({}).sort(sortParam).toArray()
    }

    getByEmail(collection, email) {
        return this.db.collection(collection).find({ email: email.email }).toArray()
    }

    getById(collection, id) {
        return this.db.collection(collection).find({ _id: new ObjectID(id) }).toArray()
    }

    insertOne(collection, obj) {
        return this.db.collection(collection).insertOne(obj)
    }

    updateOneById(collection, obj) {
        const query = { '_id': ObjectID(obj._id) }
        obj._id = ObjectID(obj._id)
        return this.db.collection(collection).updateOne(query, obj)
    }

    deleteOne(collection, id) {
        const query = { '_id': ObjectID(id) }
        return this.db.collection(collection).deleteOne(query)
    }

    updateOne(collection, query, obj) {
        return this.db.collection(collection).updateOne(query, obj)
    }

    findAll(collection, query) {
        return this.db.collection(collection).find(query, this.fieldsWanted).sort({date: -1}).toArray()
    }
    findOne(collection, query) {
        return this.db.collection(collection).find(query).toArray()
    }
}

export const db = new DataBase()
