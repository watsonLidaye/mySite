var models = require('../db');
var express = require('express');
var mysql = require('mysql');
var pool = mysql.createConnection(models.mysql);
var public = require('./public')
var code = 0
//res返回   通过res 有没有值判断是否需要直接返回结果
//sql执行语句
//params参数
function connectMysql ({res,sql,params}){

    if(!sql){
        console.log('sql语句不能为空')
        return false
    }
    pool.getConnection(function (err,connection) {
        public.jsonWrite(res,err,'')
        return new Promise ((reslove,reject)=>{
            connection.query(sql,params?Object.values(params):null,(err,result)=>{
                console.log(err)
                if(err){
                    public.jsonWrite(res,err,result)
                }
                if(res){
                    public.jsonWrite(res,err,result)
                }else{
                    reslove()
                }
                connection.release()
            })
        })
        
    })
}
exports.connectMysql= connectMysql