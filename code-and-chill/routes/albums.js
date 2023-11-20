const express = require('express');
const router = express.Router();

const albumsCtrl = require('../controllers/albums');

router.get('/new', albumsCtrl.new)


module.exports = router;
