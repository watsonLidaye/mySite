
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
    // if(typeof ret === 'undefined') {
    //     res.json({
    //         code: '1',
    //         msg: '操作失败'
    //     });
    // } else {
    //     if(Object.prototype.toString.call(ret)=='[object String]'){
    //         res.json({
    //             code: '1',
    //             msg: ret
            
    //         });
           
    //     }else{
    //         res.json({
    //             code: '0',
    //             msg: '操作成功'
    //         });
    //     }
        
    // }
}

exports.jsonWrite=jsonWrite