const userApi = require('./api/userApi');
const recentImage = require('./api/recentImage');
const shortContent = require('./api/shortContent');
const connectApi = require('./api/connectApi');
const connectDetail = require('./api/connectDetail');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.all('*', (req, res, next) => {
    try {
        var promise = ''
        if((req.headers.origin).toString().indexOf('localhost')>0
            ||(req.headers.origin).toString().indexOf('ergouzi')>0){
                promise=req.headers.origin  
                console.log(promise)
                res.header("Access-Control-Allow-Origin",promise);
        }
        res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
    next();
    } catch (error) {
        res.send({
            code: '-1',
            msg: '不允许直接访问，谢谢'
        })
    }
    
  });
// 后端api路由
app.use('/api/user', userApi);
app.use('/api/image', recentImage);
app.use('/api/shortContent', shortContent);
app.use('/api/connectApi', connectApi);
app.use('/api/connectDetail', connectDetail);
// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');