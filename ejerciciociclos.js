let sum=0, prom, cont=0, num;


num = parseInt(prompt("ingresa tu numero"));


while(num>=0){
    cont ++;
    sum=sum+num;
    num=parseInt(prompt("ingresa tu numero"));
    


}
prom=sum/cont;
document.write("Numeros validos introducidos" + cont);
document.write("la suma es " + sum);
document.write("El promedio es" + prom);

