const express=require('express')
const app=express()

app.use('/image',express.static('./image'))

app.listen(8080,()=>{
    console.log('服务器已启动')
})