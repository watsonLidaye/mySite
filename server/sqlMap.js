var sqlMap = {
    // 用户
    user: {
        add: 'INSERT INTO user(id, name, age) values (?, ?, ?)',
        get:'SELECT * FROM user'
    }
}

module.exports = sqlMap;