const userApi = require('./api/userApi');
const recentImage = require('./api/recentImage');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.all('*', (req, res, next) => {
    var promise = ''
    if((req.headers.origin).toString().indexOf('localhost')>0
        ||(req.headers.origin).toString().indexOf('ergouzi')>0){
            promise=req.headers.origin  
            res.header("Access-Control-Allow-Origin",promise);
    }
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
// 后端api路由
app.use('/api/user', userApi);
app.use('/api/image', recentImage);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');