num=parseInt(prompt("ingresa tu numero"));

for(cont=1;cont<=num;cont++){
    if(num%cont==0){
        document.write(cont);
    }
}

/*
for(cont=1;cont<=num;cont++){
    if(num%cont==0){
        document.write(cont);
    }else{
        (num%cont!=0)
        document.write(cont);

    }
}
*/

