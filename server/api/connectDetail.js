
var express = require('express');
var router = express.Router();
const connectDetail = require('../controller/connectDetail')
// 图片获取接口
router.post('/get',connectDetail.getDetail);
//增加喜欢
// router.post('/addIslike', (req, res) => {
//     console.log(req)
//     var table = $sql.connectDetail.get
//     var params = req.body;
//     console.log(params)
//     let last =''
//     pool.getConnection(function (err,connection) {
//         connection.query(table,function(err,result){
//             if (err) {
//                 console.log(err);
//             }
           
//             result.forEach(item=>{
//                 if(item.cateId ==params.id ){
//                     last=item.connect
//                 }
//             })
//             if (result) {
//             res.send({
//                 code: '0',
//                 data:last,
//                 msg: '获取成功'
//             })
//             }
//             connection.release();
//         })
    
//     })
// });
module.exports = router;