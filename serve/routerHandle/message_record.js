 const db=require('../database/index')

 //查找聊天列表
exports.find=(req,res)=>{
console.log('进入消息查询页面')
const info=req.query
console.log(info.id)
/*
sql语句
select *
from (
         select d.rece_id as lxr, d.*
         from message_record d
         where (d.send_id = info.id)  
         union
         select e.send_id as lxr, e.*
         from message_record e
         where (e.rece_id =info.id)
        order by send_time desc
     ) f
group by lxr
order by max(send_time) desc;
*/
const sql='select *from (select d.rece_id as lxr, d.* from message_record d where (d.send_id = '+info.id+')  union select e.send_id as lxr, e.*from message_record e  where (e.rece_id ='+info.id+') order by send_time desc) f group by lxr order by max(send_time) desc'
db.query(sql,(err,results)=>{
    if(err)
    {
        console.log('消息查询失败')
        return res.send(null)
    }
         
    if(0===results.length)
    {
        console.log('无消息')
        return res.send(null)
    }
     return res.send(results)  
  })
}

//查找当前联系人的所有聊天记录
exports.findall=(req,res)=>{
    console.log('进入所有消息查询页面')
    const info=req.query
    console.log("rece:"+info.rece_id)
    console.log("send:"+info.send_id)
    const sql= 'select *from message_record where (rece_id='+info.rece_id+' or send_id='+info.rece_id+')and(rece_id='+info.send_id+' or send_id='+info.send_id+')'
    console.log('sql:'+sql)
    //const sql='select *from message_record where rece_id='+info.rece_id+' or send_id='+info.rece_id
    db.query(sql,(err,results)=>{
        if(err)
        {
            console.log('消息查询失败')
            return res.send(null)
        }
             
        if(0===results.length)
        {
            console.log('无消息')
            return res.send(null)
        }
         return res.send(results)  
      })
     }
exports.add=(req,res)=>{
    console.log('进入消息添加页面')
    const info=req.body
    console.log(req.body)
    //获取当前时间
    var time = new Date();
    time=time.toLocaleString(); 
    const record={rece_id:info.rece_id, content:info.content, send_id:info.send_id,
                  send_src:info.send_src,rece_src:info.rece_src,res_name:info.res_name,
                  send_name:info.send_name,send_time:time
                }
    sql='insert into message_record set ?'
    db.query(sql,record,(err,results)=>{
        if(err)
        {
          console.log("记录信息失败"+results)    
          return res.send({status:1,err:err.message})  
        }
        if(0===results.length)
        {
          return res.send({stats:1,message:'没有该数据'})
        }
        console.log("记录信息成功")        
        return  res.send("success")  
      })
}