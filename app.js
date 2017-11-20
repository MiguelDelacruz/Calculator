var x = 5;

var y = 2;

var z = 4;


function calculator(x,y,z) {
	if (x=="Add") {
		x + y;
	}
	else if (x=="Subtract") {
		x - y;
	}
	else if (x=="Multiply") {
		x * z;
	}
	else if (x=="Divide") {
		x / z; 
	}
	else {
		output = "set a operator";
	}
}
var output = calculator(x,y,z);
console.log(output);