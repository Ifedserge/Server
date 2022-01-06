const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
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


module.exports = mongoose.model('catigories', categoriesSchema);