
const db=require('../database/index')
exports.find=(req,res)=>{
const doctorinfo=req.query  //获取用户提交的数据
    
    //返回指定科室的医生
    if(doctorinfo.office) 
    {
      //console.log('进入科室')
      const sql='select * from doctor_info where office=?'
      db.query(sql,doctorinfo.office,(err,results)=>{
        if(err)
            return res.send({status:1,err:err.message})  
        if(0===results.length)
            //return res.send({stats:1,message:'没有该数据'})
            return res.send([])
        else return res.send(results)  
      })
      return;
    }
    //按姓名返回医生信息
    
    if(doctorinfo.name) 
    {
      //console.log('进入姓名')
      const sql='select * from doctor_info where d_name=?'
      db.query(sql,doctorinfo.name,(err,results)=>{
        if(err)
            return res.send({status:1,err:err.message})  
        if(0===results.length)
            return res.send({stats:1,message:'没有该数据'})
        return res.send(results)  
      })
      return ;
    }
    //返回所有医生的信息
    else
    {
      //console.log('进入全部')
      const sql='select * from doctor_info'
      db.query(sql,(err,results)=>{
        if(err)
            return res.send({status:1,err:err.message})  
        if(0===results.length)
            return res.send({stats:1,message:'没有该数据'})
        return  res.send(results)  
      })
    }

}

exports.add=(req,res)=>{

}

exports.del=(req,res)=>{

}