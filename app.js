var m = "Multiply";

var p = 2;

var o = 4;


function calculator(x,y,z) {
	if (x=="Add") {
		return z + y;
	}
	else if (x=="Subtract") {
		return z - y;
	}
	else if (x=="Multiply") {
		return y * z;
	}
	else if (x=="Divide") {
		return y / z; 
	}
	else {
		return output = "set a operator";
	}

}
var output = calculator(m,p,o);
console.log(output);