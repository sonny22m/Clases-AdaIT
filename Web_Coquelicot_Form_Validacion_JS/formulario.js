function validar(Nomb, Apell, Telf, Edad, Mail){

	validarLetras(Nomb);
	validarLetras(Apell);
	validarTel(tel);
	validarEdad(edad);
	validarEmail(mail);

	/*var errores = []*/

	
	if (validarLetras(Nomb) && validarLetras(Apell) && validarTel(tel) && validarEdad(edad) && validarEmail(mail)){
		
		return true;
	}
	
	return false;
}


/*	if (!validarLetras(Nomb)){ errores[] = "El nombre solo puede contener letras";}

}
*/

//validar solo para caract. letra
function validarLetras(x){

	expr = ^[a-zA-Z]*$ {4-5}

	if (expr.test(x)) {
		
		return true;
	}

	return false;
}


//Cant de caracteres (string)
function validarTel(tel){

	if ((tel.length >= 8 && tel.length <= 12) && (!isNaN(tel))){  //Cond. cant.de caract, entre 8 y 12, 2da Cond. que sea Numero
		
		return true;
	}

	return false;
}


//debe ser numerico y ser mayor a 21
function validarEdad(edad){
	
	if (!isNaN(edad)) {
	
		var e = parseInt(edad);

		if (e => 21) {
	
			return true;
		}
	}

	return false;
}


//validar correo electronico
function validarEmail(mail){

	expr =   //buscar expresiones regulares para validar mail.

	if (expr.test(mail)) {    //test js para la cadena de caract.

		return true;
	}

	return false;
}




























function isletter(str) {
	return str.length === 1 && str.match(/[a-z]/i);
}

function Enviar() {
	var Campos = ["nombre", "apellido", "telefono", "email", "edad"];

	for (var i = 0; i < Campos.length; i++) {
		var valorCampo = document.getElementById(Campos[i]).value;

		if (valorCampo == null || valorCampo.length == 0) {
		alert("Tenes que ingresar un " + Campos[i]);
		}
	}

	var nombre = document.getElementById("nombre").value;
	var Valido = true; 

	for (var i = 0; i < Nombre.length && Valido; i++) {
//		console.log(Nombre[i]);
		if (!isletter(Nombre[i])) {
			valido = false;
			break;   //corta la vuelta de ejec.
		}
	}
	if (!valido) {
		alert("tu nombre solo puede contener letras");
	}
}