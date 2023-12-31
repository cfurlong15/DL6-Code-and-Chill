const Album = require('../models/album');

module.exports = {
    new: newAlbum,
    create,
    index,
    show
}

function newAlbum(req, res) {
    res.render('new', {title: 'Add Album', errorMsg: ''})
}


function create(req, res) {
    try {
        Album.create(req.body)
        res.redirect('/albums')
    }
    catch (err) {
        console.log(err)
    }
}

async function index(req, res) {
  try {
    const allAlbums = await Album.find()
    res.render('index', {
      album: allAlbums,
    })
  }
  catch (err) {
    console.log(err)
  }
}

async function show(req, res,) {
  try {
    const album = await Album.findById(req.params.id)
    res.render('show', {
      album
    })
  }
  catch (err) {
    console.log(err)
  }
}