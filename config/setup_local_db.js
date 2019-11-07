const ObjectID = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient

let db
let db_local
let local_url
let url = local_url
let local_posts

// if we have a production db copy the stuff to local
const copyProdToLocal = (db, obj) => {

    db.collection('test_posts').find({}).toArray().then(posts => {
        local_posts = posts
        MongoClient.connect(local_url, (err, dbParam) => {
            console.log("url:", local_url)
            console.log("error:", err)
            console.log('Successfully connected to MongoDB server.')
            db_local = dbParam.db("DisasterResponse")
            db_local.collection('test_disasters').insert(local_posts).catch(function(error){
                console.log(error.code)
            })
            console.log('finished!')
            obj.db = db_local
            return
        })
    }).catch(function(error) {
        console.log(error)
    });
}

// otherwise setup an empty collection for local usage
const createLocalDB = ( obj ) => {
    MongoClient.connect(local_url, (err, dbParam) => {
        if( err ){
            throw err;
        }
        console.log("url:", local_url)
        console.log("error:", err)
        console.log('Successfully connected to MongoDB server.', dbParam)
        db_local = dbParam.db("DisasterResponse")
        db_local.createCollection('test_disasters').catch(function(error){
            console.log(error.code)
        })
        var posts = require('./test_posts.json')
        posts.forEach(function(v, idx){ v._id = idx })
        db_local.collection('test_disasters').insert(posts).catch(function(error){
            console.log(error.code)
        })
        console.log('finished!')
        obj.db = db_local
        return
    })
}

// connect to MongoDB using production url or local url from a config file
export const setupLocalDB = ( config, obj ) => {
    url = config['productionURL']
    MongoClient.connect(url, (err, dbParam ) => {
        if ( err ){
            local_url = config['localURL']
            createLocalDB( obj )
            obj.url = local_url
        } else {
            console.log("url:", url)
            console.log("Succesfully connected to MongoDB server.")
            db = dbParam.db('DisasterResponse')
            local_url = config['localURL']
            copyProdToLocal( db, obj )
            obj.url = local_url
            return
        }
    })
}
