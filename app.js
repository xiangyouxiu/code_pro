const express=require('express')
const app=express()



const cors=require('cors')
app.use(cors())

app.use(express.urlencoded({extended:false}))


//导出路由模块

//医生
const doctor=require('./router/doctor')
app.use(doctor)

//用户
const user=require('./router/user')
app.use(user)

//健康知识
const knoledge=require('./healthknowledge')
app.use(knoledge)

//预约时间
const app_time=require('./router/app_time')
app.use(app_time)

//预约记录
const app_record=require('./router/app_record')
app.use(app_record)

//聊天记录
const mess=require('./router/message_record')
app.use(mess)


//图片
const getimage=require('./getImage')
app.use(getimage)



app.listen(8080,()=>{
    console.log('服务端已启动')
})



