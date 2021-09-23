const a=[];
const b=[1,true,"hola",["A","B","C"]];

console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[3][2]);

const c=Array.of("X","Y","Z",9,8,7);
console.log(c)

const d=Array(100).fill(false);
console.log(d);

const colores=["rojo","verde","azul"];
console.log(colores);

colores.push("negro");
console.log(colores);


//quita el ultimo objeto
colores.pop();
console.log(colores);



