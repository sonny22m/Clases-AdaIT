//Ejercicio2: Realizar un algoritmo que permita leer 2 numeros diferentes y nos diga cual es el mayor de los 2numeros.//

Algoritmo MayorMenor
	Definir NumIngr, NumIngr2 Como Entero;
	
	NumIngr = 0;NumIngr2 = 0;
	
	Escribir "ingrese un n�mero:";
	Leer NumIngr;
	Escribir "ingrese otro n�mero:";
	Leer NumIngr2;
	
	Si NumIngr < NumIngr2 Entonces
		Mostrar "El N�mero ingresado es mayor al 1mer n�mero";
	Sino
		Si NumIngr > NumIngr2 Entonces
			Mostrar "El N�mero ingresado es menor al 1mer n�mero";
		Fin Si
	Fin Si
FinAlgoritmo
