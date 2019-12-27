var fs=require("fs");
fs.stat("myfile.txt",function(error,stats){
   if(error){
        console.log("error");
   }
   else{
         fs.open("myfile.txt","r",function(error,fd){
			 if(error){
				  console.log("error");
			}
			else{
				var buff=new Buffer(stats.size);
				fs.read(fd,buff,0,buff.length,null,function(error,byteRead,data){
					console.log(data.toString());
					console.log("Bytes Read"+byteRead);
				});
				
			}
		 });
   
   }
   
});