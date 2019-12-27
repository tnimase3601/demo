var fs=require('fs');
data=fs.readFileSync("myfile.txt");
console.log(data.toString());
console.log("program ends");

