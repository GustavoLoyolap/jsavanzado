let numero1 = parseInt(prompt("introduce el primer numero",0));

let numero2 = parseInt(prompt("introduce el primer numero",0));

while (numero1 < numero2){

numero1++;

if (numero1 %2 != 0){

    document.write(`Este numero es impar:  ${ numero1 } `);
}

}

