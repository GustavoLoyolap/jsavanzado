var numero= parseInt(prompt("Numero",0));

while(isNaN(numero)){

numero= parseInt(prompt("Digite un numero",0));

}

if(numero %2 ==0){

    document.write("<h1> El numero es par </h1>")
} else{
    document.write("<h1> El numero es impar </h1>")
}