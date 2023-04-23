// const fs=require('fs')
// const express=require('express')
// fs.readFile('./1.txt','utf8',function(err,dataStr){
//     console.log(err)
//     console.log('-----------------')
//     console.log(dataStr)
//     const str=dataStr.split(' ')
//     console.log(str)

//     const array=[]
//     str.forEach(element => {
//        array.push(element.replace('=',':')) 
//     });
//     console.log('aray:'+array)

//     const newarray=array.join('\r\n')
//     console.log('newaray:\n'+newarray)
//     console.log('测试成功')



//     const o=''
//     console.log(o=='')
// })
// fs.writeFile('./1.txt','写入数据',function(err){
//     console.log(err)
   
// })
var t = new Date();
t=t.toLocaleString(); 
console.log(t)
