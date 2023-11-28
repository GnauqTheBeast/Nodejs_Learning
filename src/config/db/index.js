const mongoose = require('mongoose');

function connect() {
    // try {
    //     await mongoose.connect('mongodb://127.0.0.1:27017/blog_dev');
    //     console.log("Connected");
    // } catch (error) {
    //     console.log("Connect Fail");
    // }
    mongoose.connect('mongodb://127.0.0.1:27017/blog_dev')
        .then(() => console.log('Connected!'))
        .catch(() => console.log('Error!!!'));
}

module.exports = { connect };