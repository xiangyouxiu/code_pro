const db=require('../database/index')

exports.find=(req,res)=>{
    const info=req.query  //获取用户提交的数据
    const sql='select day1,day2,day3,day4,day5,day6,day7 from app_time where name=?'
    db.query(sql,info.name,(err,results)=>{
      if(err)
      {
        return res.send({status:1,err:err.message})  
      }
      if(0===results.length)
      {
        return res.send({stats:1,message:'没有该数据'})
      }
     // results[0].day1=  results[0].day1.replace(/"(\w+)":/g, "$1:");//去除key的双引号
     const temp=[results[0].day1,results[0].day2,results[0].day3,results[0].day4,results[0].day5,results[0].day6,results[0].day7]
     
     for(let i=0;i<temp.length;i++)
     {
        if(null===temp[i])continue
        var a =temp[i];
        var jsobj = JSON.parse(a); //json字符串转成js对象
        temp[i]=jsobj
     }
      return  res.send(temp)  
    })
}

exports.update=(req,res)=>{
    //console.log("进入修改页面");
    const info=req.body;  //获取用户提交的数据,如果是post请求不能用query，要用body
   // console.log("info：",info.ap);
    //const sql='UPDATE app_time SET day1= JSON_SET(day1, "$.am",?->"$.am"-1) WHERE name='张三'//原始sql语句

    //由于直接用?有些地方不支持，所以只能用字符串拼接的方式
    const sql="UPDATE app_time SET "+info.date_str+"= JSON_SET("+info.date_str+", '$."+info.ap+"'"+","+info.date_str+"->'$."+info.ap+"'"+"-1) WHERE name=?"
    db.query(sql,info.doctor,(err,results)=>{
        if(err)
        {
          console.log('数据修改失败')
          return res.send({status:1,err:err.message})  
        }
        if(0===results.length)
        {
          console.log('没有该数据')
          return res.send({stats:1,message:'没有该数据'})
        }
        console.log('数据修改成功')
        return  res.send("data update success")  
    })
}