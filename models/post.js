const mongoose = require('mongoose');
const Schema = mongoose.Schema
const postsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
    },
    categories: {   
        type: String, //[mongoose.Types.ObjectId]
        ref: 'Category',
        required: true,
        // type: mongoose.ObjectId
    },
    tags: {
        type: String, //[mongoose.Types.ObjectId]
        ref: 'Tag',
        required: true,
    },
    author:{ 
            type: String, //Schema.ObjectId
            ref: 'author',
            // required: true
        },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }
});
module.exports = mongoose.model('Post', postsSchema);
