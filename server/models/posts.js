const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    typeofpost: {
        type: String,
        enum: ['audio', 'image', 'video', 'links', 'text'],
        required: true
    },
    description: {
        type: String,
    },
    votes: {
        type: Number,
    },
    comments: {
        type: [String],
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);