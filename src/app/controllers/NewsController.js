class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    
    // [GET]
    show(req, res) {
        res.send('Quang dz');
    }
}

module.exports = new NewsController();

const newsController = require('./NewsController');
