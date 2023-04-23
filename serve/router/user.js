const express=require('express')
const router=express.Router()

//导入用户路由处理函数模块
const doctorhandle=require('../routerHandle/user')

router.get('/user/find',doctorhandle.find)
router.post('/user/add',doctorhandle.add)
router.post('/user/update',doctorhandle.update)
router.post('/user/delete',doctorhandle.delete)
module.exports=router