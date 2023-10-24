const Post = require('../models/Posts');

class SiteController {
    // [GET] /news
    async index(req, res) {
        // res.render('home');
        try {
            const post = await Post.find({});
            res.json(post);
        } catch (error) {
            res.status(400).json({error : 'ERROR!!'});
        }
    }

    // [GET]
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

const siteController = require('./SiteController');
