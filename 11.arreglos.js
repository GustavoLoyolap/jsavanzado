
//declaracion arreglos



let lenguajes=["javascript","java","PHP","Python","C#","C++","Scala","Rust","Ruby","Cobol"];

//foreach

/*for(let i=0; i<lenguajes.length -1;i++){
    lenguajes[i];
}*/


//funcion anonima
document.write("<ul>");
lenguajes.forEach(function(lenguaje,index){
    document.write(`<li>${index}-${lenguaje}</li>`);

});
document.write("</ul>");

console.log(lenguajes.length);

//ENCONTRAR ALGO DENTRO DEL ARREGLO SI ESTA O NO POR MEDIO DE TRUE O FALSE
console.log(lenguajes.includes("PHP"));

//CREA NUEVO ARREGLO CON










