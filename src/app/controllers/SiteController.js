class SiteController {
    // [GET] /news
    index(req, res) {
        res.render('home');
    }

    // [GET]
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

const siteController = require('./SiteController');
