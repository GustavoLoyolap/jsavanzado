let n1=parseInt(prompt("Escribe un primer numero",0));
let n2=parseInt(prompt("Escribe un segundo numero",0));

suma=(n1+n2);
resta=(n1-n2);
multi=(n1*n2);
division=(n1/n2);

if(n1 > n2){
    document.write(`El primer numero es mayor,la suma es ${suma} y la resta es ${resta}`);
}else if(n1<n2){
    document.write(`El segundo numero es mayor,la multiplicacion es ${multi} y la division es ${division}`);
}else{
    document.write(`Tus numeros son iguales`);
}


























/*
let n1=-3;

if(n !== 0){

    if (n > 0){
if (n %2 ===0){
    document.write(`el numero ${n} es par positivo`);
}else{
    document.write(`el numero ${n} es impar positivo`);
    }
}else{
    if(n%2===0){
        document.write(`El numero ${n} es par negativo`);

    }else{
        document.write(`El numero ${n} impar negativo`);
    }
}
}else{
    document.write(`El numero ${n} es neutro`);
}

*/