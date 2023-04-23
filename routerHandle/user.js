const db=require('../database/index')


exports.find=(req,res)=>{
    console.log('进入用户查询界面')
   const info=req.query  //获取用户提交的数据
   //console.log("info："+info.number)
  // console.log("info："+info.pass)
   //这个sql不要改，就用字符串拼接的方式，不然跑不起来
   sql="select *from user where password="+info.password+"&&number="+info.number
   db.query(sql,(err,results)=>{
    if(err)
    {
        console.log('查询失败：'+err.message)
        return res.send(results)  
    } 
   else if(0===results.length)
        {
            console.log('查询失败')
            return res.send(results)
        }
     console.log('查询成功')
     return res.send(results)  
  })
  return;
}

exports.add=(req,res)=>{
    console.log('进入添加用户')
    const user=req.body  //获取用户提交的数据
    console.log(req.body)
    const info={card:user.card,name:user.name,number:user.number,password:user.password,src:user.src}
    const sql='insert into user set?'
    db.query(sql,info,(err,results)=>{
        if(err)
        {
            console.log('添加失败：'+err.message)
            return res.send({err:err.message})  
        }
            
        if(0===results.length)
            {
                console.log('添加失败')
                return res.send({err:'添加用户失败'})
            }
           
        return res.send(results)  
      })
      return;
}

exports.update=(req,res)=>{
    const user=req.body  //获取用户提交的数据
   

}
exports.delete=(req,res)=>{
        const user=req.body  //获取用户提交的数据
        console.log('进入删除用户界面')
        console.log(req.body)
        const sql='delete from user where number=?'
        db.query(sql,user.number,(err,results)=>{
            if(err)
            {
                console.log('删除失败：'+err.message)
                return res.send({err:err.message})  
            }
                
            if(0===results.length)
                {
                    console.log('删除失败')
                    return res.send({err:'删除用户失败'})
                }
            console.log("删除用户成功")
            return res.send(results)  
          })
          return;
}