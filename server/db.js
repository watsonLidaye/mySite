
const mysql = require('mysql');
var db_config={
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test',
  port: '3306'
}
function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();

module.exports ={
    mysql:db_config,
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
          });
          // 释放连接
          conn.release();
          console.log('已经释放')
      })
  }

  }