var sqlMap = {
    // 用户
    user: {
        add: 'INSERT INTO user(id, name, age) values (?, ?, ?)',
        get:'SELECT * FROM user '
    },
    image: {
        get:'SELECT * FROM image '
    },
    shortContent:{
        get:'SELECT * FROM shortContent',
        update:"UPDATE Websites  SET isLike='?' WHERE cateId='?'"
    },
    connect:{
        get:'SELECT * FROM connect',
        add: 'INSERT INTO connect(id, name, connect,remake) values (?, ?, ?, ?)',
    },
    connectDetail:{
        get:'SELECT * FROM short_content_detail ',  
    },
    shortContentType:{
        get:'SELECT * FROM short_content_type ',  
    },
}

module.exports = sqlMap;