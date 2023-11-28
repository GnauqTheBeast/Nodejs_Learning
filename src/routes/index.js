const newsRouter = require('./news');
const siteRouter = require('./site');
const postRouter = require('./post');
const meRouter = require('./me');

function route(app) {
    app.use('/me', meRouter);
    app.use('/post', postRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
