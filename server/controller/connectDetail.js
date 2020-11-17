var $sql = require('../sqlMap');
var models = require('../db');

getDetail =(req, res) => {
    let sqlArr = [];
    let table = $sql.connectDetail.get
    let params = req.body;
    let last =''
    let callBack =(err,result)=>{
        console.log(params)
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
    }
    models.sqlConnect(table, sqlArr, callBack)
}

getInfo =(req, res) => {
    console.log(req)
    let table = $sql.connectDetail.get
    let params = req.body;
    let sqlArr= []
    console.log(params)
    let last =''
    let callBack =(err,result)=>{
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
    }
    models.sqlConnect(table, sqlArr, callBack)
}

module.exports = {
    getDetail,
    getInfo
}
