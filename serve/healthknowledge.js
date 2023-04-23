const express=require('express')
const router=express.Router()

//健康信息列表
const list=[
    {
      id:0,
      title:'母猪的产后护理',
      info:'母猪产后护理，首先要从产前做起，母猪产前四五天要逐渐减少饲喂量，其目的是减少腹部压力，产前吃的少，产后才能吃的多。若产前吃的多，不仅会形成产程过长，而且还会形成产后胃积食，或吃的少，或者不食。',
      src:'http://localhost:8080/image/猪.png'
   },
   {
    id:1,
    info:'泡脚可促进新陈代谢，加强体内循环，输送血液至足部末梢，可减少高血压、心脏病及中风等高危险疾病的发生。另外，泡脚还可以促进脚底的血液循环，人体的脚底长期处于身体的最底部，在冬季微循环是很不充分的，泡脚有助于血液循环带走体内的废物并供给养分。',
    title:'经常泡脚的好处',
    src:'http://localhost:8080/image/儿童抽动症.png'
   },

  {
    id:2,
    info:'',
    title:'小孩子不爱吃饭',
    src:'http://localhost:8080/image/儿童抽动症.png'
   },
]

//健康信息
var info=[
    '母母猪产后护理，首先要从产前做起，母猪产前四五天要逐渐减少饲喂量，其目的是减少腹部压力，产前吃的少，产后才能吃的多。若产前吃的多，不仅会形成产程过长，而且还会形成产后胃积食，或吃的少，或者不食。',
    '泡脚可促进新陈代谢，加强体内循环，输送血液至足部末梢，可减少高血压、心脏病及中风等高危险疾病的发生。另外，泡脚还可以促进脚底的血液循环，人体的脚底长期处于身体的最底部，在冬季微循环是很不充分的，泡脚有助于血液循环带走体内的废物并供给养分。',
    '多打就可以了'
]

//处理请求，返回健康信息列表
router.get('/getknowledgeList',(req,res)=>{
    res.send(list)
})

//返回健康信息
router.get('/getknowledgeList/:id',(req,res)=>{
    res.send(info[req.params.id])
})

//向外到处路由模块
module.exports=router