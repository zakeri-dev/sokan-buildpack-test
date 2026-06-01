const http=require('http');
http.createServer((_,res)=>{res.end('Sokan buildpack (Node, no Dockerfile) OK\n');}).listen(8080,()=>console.log('on 8080'));