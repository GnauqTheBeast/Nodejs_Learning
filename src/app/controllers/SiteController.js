const Post = require('../models/Posts');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /news
    index(req, res, next) { 
        // try {
        //     const post = await Post.find({});
        //     res.json(post);
        // } catch (error) {
        //     res.status(400).json({error : 'ERROR!!'});
        // }
        Post.find({})
            .then(posts => res.render('home', 
                {   title: "Common Post", 
                    posts: multipleMongooseToObject(posts) 
                }))
            .catch(next);
    }

    // [GET]
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

const siteController = require('./SiteController');
