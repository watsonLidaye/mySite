var sqlMap = {
    // 用户
    user: {
        add: 'INSERT INTO user(id, name, age) values (1, ?, ?)'
    }
}

module.exports = sqlMap;