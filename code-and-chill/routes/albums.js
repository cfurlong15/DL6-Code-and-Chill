const express = require('express');
const router = express.Router();

const albumsCtrl = require('../controllers/albums');

router.get('/new', albumsCtrl.new);

router.post('/new', albumsCtrl.create);


module.exports = router;
