const Album = require('../models/album');

module.exports = {
    new: newAlbum,
    create
}

function newAlbum(req, res) {
    res.render('new', {title: 'Add Album', errorMsg: ''})
}


async function create(req, res) {
    try {
        Album.create(req.body)
        res.redirect('/albums')
    }
    catch (err) {
        console.log(err)
    }
}