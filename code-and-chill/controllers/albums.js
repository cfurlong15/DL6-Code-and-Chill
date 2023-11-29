const Album = require('../models/album');

module.exports = {
    new: newAlbum,
    create
}

function newAlbum(req, res) {
    res.render('new', {title: 'Add Album', errorMsg: ''})
}


async function create(req, res) {
    
    for (let key in req.body) {
    
        if (req.body[key] === '') delete req.body[key];
    }

    try {
      await Album.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect(`/albums/${movie._id}`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('/new', { errorMsg: err.message });
    }
  }