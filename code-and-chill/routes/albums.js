const express = require('express');
const router = express.Router();

const albumsCtrl = require('../controllers/albums');

router.get('/new', albumsCtrl.new);

router.post('/', albumsCtrl.create);

router.get('/albums', albumsCtrl.index);


module.exports = router;
