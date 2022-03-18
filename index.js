alert("NOTA: Por favor acceda a la consola antes de ejecutar cualquier proceso!");
function numPrimos() {
    let cantidad = document.getElementById("numero1").value
    let j = 2;
    let numerosPrimos = [];

    for (; j < cantidad; j++) {

        if (primo(j)) {
            numerosPrimos.push(j);
        }
    
    }
    console.log("La cantidad de números primos es: " + numerosPrimos.length);

    if (cantidad > 3) {
        console.log("La números primos entre el 1 y el " + `${cantidad} ` + "son: " + numerosPrimos);
    } if (numerosPrimos.length == 0) {
        console.log("El número primo entre el 1 y el " + `${cantidad} ` + "es: Ninguno");
    } if (numerosPrimos.length == 1) {
        console.log("El número primo entre el 1 y el " + `${cantidad} ` + "es: " + numerosPrimos);
    } 
    
    
    function primo(numero) {

        for (var i = 2; i < numero; i++) {

            if (numero % i === 0) {
            return false;
            }

        }

    return numero !== 1;
    }
} 

function sum(){
    let numeroN = document.getElementById("numero2").value;
    let vectorSum=[numeroN];
    let totalSum = 0;
    let i;
    for (i = 0; i < numeroN; i++) {
        vectorSum[i] = Math.pow((i + 1), numeroN);
        console.log((i + 1) + "^" + numeroN + " = " + vectorSum[i]);
        totalSum = totalSum + vectorSum[i];
    }
console.log("La sumatoria total es: " + totalSum);
 }


function fibonacci() {
    /*numeroN = document.getElementById("numero3").value;
    
    if (numeroN < 2){
        console.log("Por favor ingrese un número mayor a 1!")
    } else {
        var a, b, res;
        a = 0;
        b = 1;
        for (var i = 2; i <= numeroN; i++) {
            res = a + b;
            a = b;
            b = res;
        }
        console.log(res);
    }*/
    const numeroN = document.getElementById("numero3").value;
	const fib = [0,1];

    if (numeroN < 2) {
        console.log("Por favor ingrese un número mayor a 1!")
    } else {
	    for(i = 2; i <= numeroN; i++){
		fib.push(fib[i - 1] + fib[i - 2]);
		console.log(fib[i]);	
	    }
    }
}

//generador manual de numeros segun la serie de fibonacci 
function* generator() {
    let a = 1;
    let b = 1;
    while(true) {
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        yield nextNumber;
    }
}


