var http=require('http');
serv=http.createServer();
serv.listen(3000);
console.log("server running at port 3000");
serv.on('request',function(req,resp){
   resp.end("Hello World!");
});