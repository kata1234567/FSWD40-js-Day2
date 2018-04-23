
/*
var test = (function(webD){
	var convert = 'i am a Web developer';
	var temp = convert.charAt(0).toUpperCase();
	return temp + " am a Web developer";
}());

console.log(test);
*/

var test = (function(){
	var convert = 'i am a Web developer';
	return convert.charAt(0).toUpperCase() + " am a Web developer"; //convert.slice(1,20) also possible
}());

console.log(test);
/*
function grades(math, physics, english){
	var sum = math + physics + english;
	var average = sum / 3;
	var result = [sum, average];

	return result;
}

console.log(grades(3,2,5)[0]);
console.log('<br>');
console.log(grades(3,2,5)[1]);
*/

function grades(){
	var tempMath = prompt('please input your math grade! ');
	var tempPhysics = prompt('please input your physics grade! ');
	var tempEnglish = prompt('please input your english grade! ');

	var math = Number(tempMath);
	var physics = Number(tempPhysics);
	var english = Number(tempEnglish);

	if(math >= 1 && math <= 5) {
		var resultMath = math;
	}

	if(physics >= 1 && physics <= 5){
		var resultPhysics = physics;
	}

	if(english >= 1 && english <= 5){
		var resultEnglish = english;
	}

	var sum = resultMath + resultPhysics + resultEnglish;
	var average = sum / 3;
	return sum;
}

console.log(grades());

function myFunction() {
    //alert("You have changed the size of the browser window!");

    var width = this.innerWidth;
	var height = this.innerHeight;
	console.log(width + ' ' + height);
	document.getElementById("test").innerHTML = width + ' ' + height;
}