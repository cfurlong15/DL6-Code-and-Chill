const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    title: {
        type: String, required: true
    },
    artist: {
        type: String, required: true
    },
    releaseYear: {
        type: Number,
        default: function () {
            return new Date().getFullYear();
        },
        min: 1930
    },
}, {
    timestamps: true
});

const Album = mongoose.model('Album', albumSchema)
module.exports = Album