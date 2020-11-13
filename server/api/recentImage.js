var express = require('express');
var router = express.Router();
const recentImage = require('../controller/recentImage')


// 图片获取接口
router.get('/getImage',recentImage.getImage);

module.exports = router;