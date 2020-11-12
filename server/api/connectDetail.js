var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();

// 图片获取接口
router.post('/get', (req, res) => {
    var table = $sql.connectDetail.get
    var params = req.body;
    let last =''
    conn.query(table,function(err,result){
        if (err) {
            console.log(err);
        }
        result.forEach(item=>{
            if(item.cateId ==params.id ){
                last=eval('(' + item.content + ')')
            }
        })
        if (result) {
        res.send({
            code: '0',
            data:last,
            msg: '获取成功'
        })
        }
    })
});
//增加喜欢
router.post('/addIslike', (req, res) => {
    console.log(req)
    var table = $sql.connectDetail.get
    var params = req.body;
    console.log(params)
    let last =''
    conn.query(table,function(err,result){
        if (err) {
            console.log(err);
        }
       
        result.forEach(item=>{
            if(item.cateId ==params.id ){
                last=item.connect
            }
        })
        if (result) {
        res.send({
            code: '0',
            data:last,
            msg: '获取成功'
        })
        }
    })
});
module.exports = router;