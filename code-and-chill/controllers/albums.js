const Album = require('../models/album');

module.exports = {
    new: newAlbum
}

function newAlbum(req, res,) {
    res.render('/new', {title: 'Add Album', errorMsg: ''})
}