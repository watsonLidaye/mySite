var express = require('express');
var router = express.Router();
const controller = require('../controller/words')

//获取最近文章
router.get('/getRecent',controller.getRecent);

module.exports = router;