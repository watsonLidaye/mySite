var $sql = require('../sqlMap');
var models = require('../db');

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
    }
    models.sqlConnect(table, sqlArr, callBack)
}
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

module.exports = {
    getShort,
    getCateList
}