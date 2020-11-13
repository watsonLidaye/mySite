var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
var pool = mysql.createPool(models.mysql);
// 连接数据库
// var conn = mysql.createConnection(models.mysql);

// conn.connect();

// 图片获取接口
router.post('/get', (req, res) => {
    var table = $sql.shortContent.get
    var params = req.body;
    pool.getConnection(function (err,connection) {
        connection.query(table,function(err,result){
            if (err) {
                console.log(err);
            }
            if (result) {
                if(params.id){
                    let list = []
                    result.forEach(item=>{
                        if(item.shortContentId == params.id) {
                            list.push(item)
                        }
                    })
                    res.send({
                        code: '0',
                        data:list,
                        msg: '获取成功'
                    })
                } else{
                    res.send({
                        code: '0',
                        data:result,
                        msg: '获取成功'
                    })
                }
            }
            connection.release();
        })
    })
       
    
    
});
//短文分类列表
router.get('/getCateList', (req, res) => {
    var table = $sql.shortContent.get
    var cateTable = $sql.shortContentType.get
    var taotalList = []
    var cateList = []
    // 获取所有列表
    pool.getConnection(function (err,connection) {
        connection.query(table,function(err,result){
            if (err) {
                console.log(err);
            }
            taotalList = result
            connection.release()
            // 获取分类列表
            connection.query(cateTable,function(err,result2){
                if (err) {
                    console.log(err);
                }
                
                cateList = result2        
                console.log(cateList)    
                cateList.forEach((item)=>{
                    item.count = 0
                    console.log('--------')
                    console.log(item.id)
                    taotalList.forEach(tatol=>{
                        console.log('---------------')
                        console.log(tatol.shortContentId==item.id)
                        if(tatol.shortContentId==item.id){
                            item.count=Number(item.count)+1
                        }
                    })
                    console.log(item.count)
                })
                res.send({
                    code: '0',
                    data:cateList,
                    msg: '获取成功'
                })
                connection.release()
            })
        })
    })
    
});
module.exports = router;