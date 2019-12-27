exports.factorial=function(n){
fact=1;
for(i=1;i<=n;i++){
   fact=fact*i;
}
return fact;
}

exports.addition=function(a,b){
	return a+b;
	
}
//c=setTimeInterval(factorial(5),200);

exports.findsum(){
	var sum=0;
	for(i=0;i<arguments.length;i++){
		sum+=arguments[i];
		
	}
	return sum;
	
}



//clearTimeInterval(c)
console.log("factorial:"+factorial(5));
console.log("addition:"+addition(20,30));