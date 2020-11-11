var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
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
        if(Object.prototype.toString.call(ret)=='[object String]'){
            res.json({
                code: '1',
                msg: ret
            
            });
           
        }else{
            res.json({
                code: '0',
                msg: '操作成功'
            });
        }
        
    }
};

// 增加用户接口
router.post('/addConnect', (req, res) => {
    var sql = $sql.connect.add;
    var table = $sql.connect.get
    var params = req.body;
    if(!params.name){
        jsonWrite(res,'请告诉我你的名字！');
        return false
    }
    if(!params.connect){
        jsonWrite(res,'请告诉我你的联系方式！');
        return false
    }
    if(!params.remake){
        jsonWrite(res,'听不清，请写内容');
        return false
    }
    if(!(/^1(3|4|5|6|7|8|9)\d{9}$/g.test(params.connect))){ 
        if(!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(params.connect))){
            jsonWrite(res,"请告诉我正确的邮箱号码");  
           return false
       }else if((/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(params.connect))){

       } else {
        jsonWrite(res,"请告诉我正确手机号码");  
           return false 
       }
       
   }
    var index = 0
    var list = []
    conn.query(table,function(err,result){
        if (err) {
        }
        if (result) {
        console.log(result)
         list = result
         if(list.length==0){
            index=0
         }else{
            for(var i=0;i<list.length;i++) {
                if(list[i].id>=index){
                    index = list[i].id+1
                }
            }
         }
         
        conn.query(sql, [index,params.name, params.connect,params.remake], function(err, result) {
            console.log('成功')
            console.log(result)
            if (err) {
                console.log(err);
            }
            if (result) {
                jsonWrite(res, result);
            }
        })
        }
    })
   
});

module.exports = router;