import { Router } from 'express'
import { db } from '../lib/db'
import { posts_db_name } from '../Utilities/API_utilities'


const postsRouter = Router()

postsRouter.get('/api/posts', (req, res) => {
    db.getAll(posts_db_name).then(result => {
        return res.json(result)
    }).catch(error => {
        console.log('error getting all Posts', error)
        return res.status(500).json(error)
    })
})

postsRouter.post('/api/posts', function(req, res) {
    db.insertOne(posts_db_name, req.body).then(response => {
        res.status(201).json(response);
    }).catch(error => {
        res.status(506).json({'error': error})
    })
})

postsRouter.put('/api/posts', function(req, res) {
    db.updateOneById(posts_db_name, req.body).then(response => {
        res.status(201).json({msg: 'successfully edited report'});
    }).catch(error => {
        console.log('error is', error)
        res.status(506).json({'error': error})
    })
})

postsRouter.get('/api/posts/delete/:id', function(req, res) {
    const postId = req.params.id
    db.deleteOne(posts_db_name, postId).then(response => {
        res.status(201).json({msg: 'successfully deleted disaster report'});
    }).catch(error => {
        console.log('error is', error)
        res.status(506).json({'error': error})
    })
})

export {
    postsRouter
}