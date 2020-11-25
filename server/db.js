
const mysql = require('mysql');


module.exports ={
    mysql:{
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'test',
      port: '3306'
    },
    sqlConnect: function (sql, sqlArr, callback) {
      var pool = mysql.createPool(this.mysql);
      pool.getConnection((err, conn) => {
          console.log("数据库连接池");
          if (err) {
              console.log("连接失败");
              return;
          } else {
              console.log("连接成功...");
          }
          // 事件驱动回调
          conn.query(sql, sqlArr,(err,result)=>{
            callback(err,result)
            conn.release();
            console.log('已经释放')
          });
          // 释放连接
         
      })
  }

  }