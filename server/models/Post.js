const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String, 
    author: String,
    date: String,
    tags: [String],
    comments: [String],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
