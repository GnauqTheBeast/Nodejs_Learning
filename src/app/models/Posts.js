const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongoose_delete = require('mongoose-delete');

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Post = new Schema({
    name: { type: String, default: '', require: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name' }, 
    videoId: { type: String, require: true },
}, {
    timestamps: true
});

mongoose.plugin(slug);
Post.plugin(mongoose_delete, { 
    overrideMethods: true,
    deletedAt : true
 });

module.exports = mongoose.model('Post', Post);