//map crea nuevo arreglo a partir del resultado

let numeros = Array(2,3,4,27,19,12);
let numeros2 = numeros.map(function(numero){
    return numero*2;
});

console.log(numeros);
console.log(numeros2);

//FILTER CREA NUEVO ARREGLO CON LOS ELEMENTOS QUE CUMPLAN LA CONDICION

let filtrados = numeros.filter(function(numero){
    if (numero>10){
        return numero
    }
}
);

console.log(filtrados);
