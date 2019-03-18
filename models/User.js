const mongoose = require('mongoose')

const Schema = mongoose.Schema


const UserSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    ghID: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: false
    },
    lessons: {
        type: mongoose.Mixed,
        required: false,
    }
})

module.exports = mongoose.model('User', UserSchema)