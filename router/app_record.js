const express=require('express')
const router=express.Router()

//导入用户路由处理函数模块
const recordhandle=require('../routerHandle/app_record')

router.get('/app_record/find',recordhandle.find)
router.post('/app_record/add',recordhandle.add)
module.exports=router
