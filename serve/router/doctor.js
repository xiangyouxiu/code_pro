const express=require('express')
const router=express.Router()

//导入用户路由处理函数模块
const doctorhandle=require('../routerHandle/doctor')

router.get('/doctor/find',doctorhandle.find)
module.exports=router