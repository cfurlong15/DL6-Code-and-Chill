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


module.exports = mongoose.model('Album', albumSchema);