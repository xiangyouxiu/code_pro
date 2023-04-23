const express=require('express')
const app=express()

const cors=require('cors')
app.use(cors())

app.use(express.urlencoded({extended:false}))


const us=require('./router/doctor')
app.use(us)
// //第一种插入数据的方式
// const user={name:'李时珍',size:10,price:100,skill:'蹦迪'}
// const str='insert into  doctor_info (d_name,appoint_size,price,skilled) values(?,?,?,?)'
// //测试mysql
// db.query(str,[user.name,user.size,user.price,user.skill],(err,results)=>{
//     if(err)return console.log(err.message)
//     if(results.affectedRows===1)
//     console.log('数据插入成功')
// })
//第二种插入数据的方式
// const user={d_name:'向优秀',appoint_size:10,price:5,skilled:'转圈圈'}

// const str='insert into  doctor_info set ?'
// db.query(str,user,(err,results)=>{
//         if(err)return console.log(err.message)
//         if(results.affectedRows===1)
//         console.log('数据插入成功')
// })

//导出路由模块
const knoledge=require('./healthknowledge')
app.use(knoledge)

const getimage=require('./getImage')
app.use(getimage)


//处理get请求
// app.get('/user',(req,res)=>{

//     res.send(req.query)
// })
// app.get('/user/:id/:name',(req,res)=>{
//     console.log(req.params.id)

//     res.send(req.query)
// })

app.listen(8080,()=>{
    console.log('服务端已启动')
})



