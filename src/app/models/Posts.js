const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post = new Schema({
    name: { type: String, default: '' },
    descriptiion: { type: String },
    createAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', Post);