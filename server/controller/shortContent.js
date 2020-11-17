var $sql = require('../sqlMap');
var models = require('../db');

//获取列表
getShort=(req, res) => {
    let table = $sql.shortContent.get
    let params = req.body;
    let sqlArr= []
    let callBack=(err,result)=>{
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
                list =list.reverse()
                res.send({
                    code: '0',
                    data:list,
                    msg: '获取成功'
                })
            } else{
                result =result.reverse()
                res.send({
                    code: '0',
                    data:result,
                    msg: '获取成功'
                })
            }
        }
    }
    models.sqlConnect(table, sqlArr, callBack)
}
//获取分类
getCateList=(req, res) => {
    let table = $sql.shortContent.get
    let cateTable = $sql.shortContentType.get
    let sqlArr = []
    let taotalList = []
    let cateList=[]
    var cateListGet = (err,result2)=>{
        if (err) {
            console.log(err);
        }  
        cateList = result2 
        cateList.forEach((item)=>{
            item.count = 0
            taotalList.forEach(tatol=>{
                if(tatol.shortContentId==item.id){
                    item.count=Number(item.count)+1
                }
            })
        })
        res.send({
            code: '0',
            data:cateList,
            msg: '获取成功'
        })
    }
    let callBack=(err,result)=>{
        if (err) {
            console.log(err);
        }
        taotalList = result 
        models.sqlConnect(cateTable, sqlArr, cateListGet)
    }
    models.sqlConnect(table, sqlArr, callBack)
}
//更新like
updateLike=(req,res)=>{
    let { id,number } = req.body;
    let sql = 'update shortContent set isLike=?where id = ?'
    let sqlArr = [number,id]
    let callBack = (err, data) => {
        if (err) {
            console.log(err)
            res.send({
                code: 400,
                msg: '更改失败！！'
            })
        } else {
            res.send({
                code: 0,
                msg: '更改成功！！',
            })
        }
    }
    models.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
    getShort,
    getCateList,
    updateLike
}