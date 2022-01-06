const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
        // validate: {
        //     validator: () => Promise.resolve(false),
        //     message: 'Email validation failed'
        //   }
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

module.exports = mongoose.model('author', authorSchema);