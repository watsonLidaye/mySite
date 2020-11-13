
var express = require('express');
var router = express.Router();
const connectApi = require('../controller/connectApi')


// 增加用户接口
router.post('/addConnect', connectApi.addConnect);

module.exports = router;