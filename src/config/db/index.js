const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog_dev');
        console.log("Connected");
    } catch (error) {
        console.log("Connect Fail");
    }
}

module.exports = { connect };