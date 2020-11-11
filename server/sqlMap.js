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
        get:'SELECT * FROM shortContent'
    }
    ,
    connect:{
        get:'SELECT * FROM connect',
        add: 'INSERT INTO connect(id, name, connect,remake) values (?, ?, ?, ?)',
    }
}

module.exports = sqlMap;