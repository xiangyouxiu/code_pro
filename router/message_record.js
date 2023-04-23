const express=require('express')
const router=express.Router()

 //导入用户路由处理函数模块
 const messagehandle=require('../routerHandle/message_record')

 router.get('/message_record/find',messagehandle.find)
 router.get('/message_record/findall',messagehandle.findall)
 router.post('/message_record/add',messagehandle.add)
 module.exports=router
