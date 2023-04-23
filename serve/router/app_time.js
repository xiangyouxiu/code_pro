const express=require('express')
const router=express.Router()

//导入用户路由处理函数模块
const timehandle=require('../routerHandle/app_time')

router.get('/app_time/find',timehandle.find)
router.post('/app_time/update',timehandle.update)
module.exports=router