//repetir bloques de codigo mientras una condicion sea verdadera

let num1 = parseInt(prompt("ingresa tu numero"));

while(num1 !== 23){
    console.log("no adivinaste el numero,intenta de nuevo");
    let num1 = parseInt(prompt("ingresa tu numero"));
}
console.log("felicidades encontraste el numero secreto");


/*
let num1 = parseInt(prompt("ingresa tu numero"));



while(isNaN(num1)){
    num1 = parseInt(prompt("ingresa tu numero"));
}
*/