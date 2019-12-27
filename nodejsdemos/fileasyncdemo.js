var fs=require("fs");
fs.readFile("myfile.txt",function(error,data){
    if(error){
	    console.log("error occured");
	}else{
	    console.log(data.toString());
	}
});
console.log("program ends here");
fs.stat("myfile.txt",function(error,stats){
     if(error){
	     console.log("error in stat");
	 }
	 else{
	  console.log(stats);
	 }
});
console.log("program stat ends here");