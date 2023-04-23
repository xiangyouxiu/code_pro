const mysql=require('mysql')
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'8834760xlj',
    database:'hospital',
    timezone: '08:00'// 设置时区为东八区，让date数据正常显示
}) 

module.exports = db