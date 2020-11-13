var $sql = require('../sqlMap');
var models = require('../db');
getImage =(req, res) => {
    var sqlArr = [];
    var sql = $sql.image.get
    var callBack =(err,result)=>{
        if (err) {
            console.log(err);
        }
        if (result) {
            res.send({
                code: '0',
                data:result,
                msg: '获取成功'
            })
        }

    }
    models.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
    getImage
}
