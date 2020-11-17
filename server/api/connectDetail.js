
var express = require('express');
var router = express.Router();
const connectDetail = require('../controller/connectDetail')
// 图片获取接口
router.post('/get',connectDetail.getDetail);
//增加喜欢

module.exports = router;