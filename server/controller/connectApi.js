var $sql = require('../sqlMap');
var models = require('../db');

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
// 增加联系
addConnect =(req, res) => {
    var sql = $sql.connect.add;
    var table = $sql.connect.get
    var params = req.body;
    let sqlArr = []
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
    var insertOp=(err,result)=>{
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    }
    // 查看最新index
    var callBack=(err,result)=>{
        console.log(err)
        console.log(result)
        if (err) {
        }
        if (result) 
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
        let temArr= [index,params.name, params.connect,params.remake]
        console.log('-----------------')
        console.log(temArr)
        console.log(insertOp)
        models.sqlConnect(sql, temArr, insertOp)
    }
    // 计算index值的新值
    console.log(table)
    console.log(sqlArr)
    console.log(callBack)
    models.sqlConnect(table,sqlArr, callBack)
}

module.exports = {
    addConnect
}