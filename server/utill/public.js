
// res 返回object
//err 错误
//ret 返回的内容
//code -1 传参拦截
var jsonWrite = function(code,res,err,ret) {
    console.log(ret)
    console.log(err)
    let response = {}
    switch(code){
        case -1:
            response={
                code: '1',
                msg: err
            }
    }
    res.json(response);
}

exports.jsonWrite=jsonWrite