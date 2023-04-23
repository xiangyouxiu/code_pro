const db=require('../database/index')

exports.add=(req,res)=>{
    const info=req.body  //获取用户提交的数据
    //console.log("进入添加记录界面")
    console.log(info)
    const record={name:info.name, doctor:info.doctor, date:info.date, ap:info.ap,card:info.card,
                  number:info.number, ill_describe:info.ill_describe, office:info.office}
    sql='insert into app_record set ?'
    db.query(sql,record,(err,results)=>{
      if(err)
      {
        //console.log("记录添加失败"+results)    
        return res.send({status:1,err:err.message})  
      }
      if(0===results.length)
      {
        return res.send({stats:1,message:'没有该数据'})
      }
      //console.log("记录添加成功")        
      return  res.send("success")  
    })
}

exports.find=(req,res)=>{
    const info=req.query  //获取用户提交的数据
    console.log("进入查找记录界面")
    console.log(info.number)
    const sql='select * from app_record where number=? order by date desc'
    db.query(sql,info.number,(err,results)=>{
      if(err)
      {
        return res.send(null)  
      }
      if(0===results.length)
      {
        return res.send(null)
      }
      console.log(results[0])
      return  res.send(results)  
    })
}
