/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numerouno;
    var numerodos;
    var sumar;
    var restar;
    var dividir;
    var multiplicar;


	numerouno = txtIdNumeroUno.value;
	numerodos = txtIdNumeroDos.value;

	numerouno = parseInt (numerouno);
	numerodos = parseInt (numerodos);
    
    sumar = numerouno + numerodos;
    alert("la suma es " + sumar);

    restar = numerouno - numerodos;
    alert("la resta es"+ restar);

    dividir = numerouno / numerodos;
    alert("la divicion es" + dividir);

    multiplicar = numerouno * numerodos ;
    alert("la multiplicacion es "+ multiplicar);


}
