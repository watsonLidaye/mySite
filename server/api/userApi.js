var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
console.log(models)
var conn = mysql.createConnection(models.mysql);

conn.connect();
// 操作成功
var jsonWrite = function(res, ret) {
    console.log(ret)
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json({
            code: '0',
            msg: '操作成功'
        });
    }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var table = $sql.user.get
    var params = req.body;
    var index = 0
    var list = []
    conn.query(table,function(err,result){
        if (err) {
        }
        if (result) {
        
         list = result
         for(var i=0;i<list.length;i++) {
            if(list[i].id>=index){
                index = list[i].id+1
            }
        }
        conn.release();
        conn.query(sql, [index,params.name, params.age], function(err, result) {
            if (err) {
                console.log(err);
            }
            if (result) {
                jsonWrite(res, result);
            }
            conn.release();
        })
        }
    })
   
});

module.exports = router;