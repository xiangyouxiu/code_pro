const http=require('http')

const server=http.createServer()

server.on('request',function(req,res){
    const url=req.url
    console.log(url)
    console.log('收到客户端请求')
    res.setHeader('Content-Type','text/html;charset=utf-8')//解决中文乱码
    let content='<h1>404 not found</h1>'
    if(url==='/'||url=='/creat_server.js')
    content='<h1>首页</h1>'
    else if(url==='/database')
    content='<h1>关于页面</h1>'
    res.end(content)
})

server.listen(8080,function(){
    console.log('服务器启动成功')
})