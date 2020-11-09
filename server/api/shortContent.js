var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();

// 图片获取接口
router.get('/get', (req, res) => {
    var table = $sql.shortContent.get
    conn.query(table,function(err,result){
        if (err) {
            console.log(err);
        }
        if (result) {
        res.send({
            code: '0',
            data:result,
            msg: '获取成功'
        })
        }
    })
});

module.exports = router;