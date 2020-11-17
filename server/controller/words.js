var $sql = require('../sqlMap');
var models = require('../db');
getRecent =(req, res) => {
    var sqlArr = [];
    var sql = 'SELECT * FROM content'
    var callBack =(err,result)=>{
        if (err) {
            console.log(err);
        }
        result = result.reverse()
        let last = []
        result.forEach((item,index)=>{
            if(index<3){
                last.push(item)
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
    models.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
    getRecent
}
