//Ejercicio1: Realizar un algoritmo que permita leer si el num ingresado es igual, mayor o menor a 0.//

Algoritmo MayorMenorIgual
	
	Definir User como caracter;
	Definir NumIngreso Como Entero;
	
	User=" ";
	NumIngreso =0;
	
	Escribir "ingrese su User:";
	Leer User
	Escribir "ingrese un numero:";
	Leer NumIngreso;
	
	Si NumIngreso == 0 Entonces
		Mostrar "El Número ingresado es igual a 0";
	Sino
		si NumIngreso > 0 Entonces
			Mostrar "El Número ingresado es mayor a 0";
		Sino
			si NumIngreso < 0 Entonces
				Mostrar "El Número ingresado es menor a 0";
			FinSi
		FinSi
	Fin Si
		
FinAlgoritmo



