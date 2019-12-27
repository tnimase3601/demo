http=require("http");
url=require("url");
processdata=function(req,resp){
d=url.parse(req.url);
console.log(d);
switch(d.pathname){
case "/":
   resp.writeHead(200,{'Content-Type':'text/html'})
   resp.end("<h1>Home page</h1>");
   break;
case "/about":
   resp.writeHead(200,{'Content-Type':'text/html'})
   resp.end("<h1>about us</h1>");
   break;
default:
   resp.writeHead(200,{'Content-Type':'text/html'})
   resp.end("<h1>page not found</h1>");
   break;


}
}
http.createServer(processdata).listen(3000);
console.log("server is running at 3000");