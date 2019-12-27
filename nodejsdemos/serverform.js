fs=require('fs')
http=require("http");
url=require("url");
query=require("querystring");
mymodule=require("./mymodule");
processdata=function(req,resp){
d=url.parse(req.url);
console.log(d);
switch(d.pathname){
case "/":
   resp.writeHead(200,{'Content-Type':'text/html'})
   fs.readFile("form.html",function(error,data){
         if(error){
		      console.log("error ocureed");
		 }
		 else{
		 resp.end(data);
		 }
   }); 
   break;
case "/calculate":
   resp.writeHead(200,{'Content-Type':'text/html'})
   data=query.parse(d.query);
   resp.write("data is :"+data.num1+"--->"+data.num2);
   resp.end("Addition :"+mymodule.addition(data.num1,data.num2));
   
   
   break;
default:
   resp.writeHead(200,{'Content-Type':'text/html'})
   resp.end("<h1>page not found</h1>");
   break;


}
}
http.createServer(processdata).listen(3000);
console.log("server is running at 3000");