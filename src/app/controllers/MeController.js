const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');
const Post = require('../models/Posts');
// const myPost = require('../models/myPosts');

class MeController {
    // [GET] /me/stored/posts
    storedPosts(req, res, next) { 
        Post.find({})
            .then(posts => res.render('me/stored-posts', {
                posts: multipleMongooseToObject(posts)
            }))
            .catch(next);
    }
    // [GET] /me/trash/posts
    trashPosts(req, res, next) {
        Post.findWithDeleted({ deleted: true})    // Use findWithDeleted not findDeleted because deleted post without method save (moongose-delete)
            .then(posts => res.render('me/trash', {
                posts: multipleMongooseToObject(posts)
            }))
            .catch(next);
    }
}

module.exports = new MeController();

