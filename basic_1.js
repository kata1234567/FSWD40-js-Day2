function crystalGazer(numberOfChildren, partnersName, geographicLocation, jobTitle){

return "You will be a "+ jobTitle +" in " + geographicLocation + " and married to " + partnersName +" with " + numberOfChildren +" children ";
}


console.log(crystalGazer (3, "Anita", "Istanbul", "Ingenieur")); 



function ageCalculator(birthYear, currentYear){
	var result = currentYear - birthYear;
	return "You are " + result + " years old"; 
}


console.log(ageCalculator(1990, 2018));


function ageCalculatorImproved (birthYear){
	var d = new Date();
	var currentYear = d.getFullYear();

	var result = currentYear - birthYear; 
	return "You are " + result + " years old"; 
}

console.log(ageCalculatorImproved(1990));



function degreeRadianConversion (degrees){
	var conversion = (degrees * Math.PI/180); 
	return conversion; 
}


console.log(degreeRadianConversion (90)); 



function areaAndVolume (width, height, depth){
	var area = width * height; 
	var volume = width * height * depth; 

	return "The area of the box is: " + area +  "<br>"  + "The volume of the box is: " + volume; 

}

console.log(areaAndVolume (7, 2, 5)); 



