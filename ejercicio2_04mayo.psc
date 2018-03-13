//Ejercicio2: Realizar un algoritmo que permita leer 2 numeros diferentes y nos diga cual es el mayor de los 2numeros.//

Algoritmo MayorMenor
	Definir NumIngr, NumIngr2 Como Entero;
	
	NumIngr = 0;NumIngr2 = 0;
	
	Escribir "ingrese un número:";
	Leer NumIngr;
	Escribir "ingrese otro número:";
	Leer NumIngr2;
	
	Si NumIngr < NumIngr2 Entonces
		Mostrar "El Número ingresado es mayor al 1mer número";
	Sino
		Si NumIngr > NumIngr2 Entonces
			Mostrar "El Número ingresado es menor al 1mer número";
		Fin Si
	Fin Si
FinAlgoritmo
