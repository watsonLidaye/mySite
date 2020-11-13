var express = require('express');
var router = express.Router();
const shortContent = require('../controller/shortContent')

// 图片获取接口
router.post('/get',shortContent.getShort);
//短文分类列表
router.get('/getCateList',shortContent.getCateList);
//修改赞
router.post('/updateLike', shortContent.updateLike);

module.exports = router;