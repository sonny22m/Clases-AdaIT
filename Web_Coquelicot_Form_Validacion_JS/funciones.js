function suma (num1, num2){
	num1 = parsefloat(num1);
	num2 = parsefloat(num2);

	if (isNaN(num1) || (isNaN(num2)){
		suma = "error";
		console.log(suma);
	}else{
		suma = num1 + num2;
		console.log(suma);
	}
	return suma;
}

function resta (num3, num4){
	num3 = parsefloat(num3);
	num4 = parsefloat(num4);

	if (isNaN(num3) || (isNaN(num4)){
		resta = "error";
		console.log(resta);
	} else{
		resta = num3 - num4;
		console.log(resta);
	}
	return resta;
}

function division (num5, num6){
	num5 = parsefloat(num5);
	num6 = parsefloat(num6);

	if (isNaN(num5) || (isNaN(num6)){
		division = "error";
		console.log(division);

	} else{
		division = num5 / num6;
		console.log(division);
	}
	return Division;
}